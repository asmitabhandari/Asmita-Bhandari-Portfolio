import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { ME, EXPERIENCE, PROJECTS, SKILLS } from '../data'

const STORAGE_KEY = 'asmita-copilot-history'

function buildLocalFallbackReply(question) {
  const q = question.toLowerCase()

  if (q.includes('contact') || q.includes('reach') || q.includes('email') || q.includes('linkedin')) {
    return `The best way to contact Asmita is via email at ${ME.email}. You can also review her work on GitHub (${ME.links.github}) and connect on LinkedIn (${ME.links.linkedin}) for professional opportunities.`
  }

  if (q.includes('youth tank') || q.includes('internship') || q.includes('greenway') || q.includes('mapping')) {
    return `At Youth Tank Detroit, Asmita designed and implemented RESTful backend services in Python/Flask for structured urban infrastructure datasets. She modeled PostgreSQL schemas supporting multi-neighborhood connectivity mapping across a 27.5-mile greenway system, and integrated third-party mapping APIs for interactive public-facing visualizations.`
  }

  if (q.includes('skill') || q.includes('backend') || q.includes('stack') || q.includes('tech')) {
    const backend = SKILLS.find((g) => g.group.toLowerCase().includes('backend'))
    const db = SKILLS.find((g) => g.group.toLowerCase().includes('database'))
    const backendText = backend ? backend.items.map((s) => s.name).join(', ') : 'FastAPI, Flask, Node.js, REST APIs'
    const dbText = db ? db.items.map((s) => s.name).join(', ') : 'PostgreSQL, MongoDB, SQL'
    return `Asmita's strongest technical areas are backend engineering and API development. Core backend technologies include ${backendText}. Her database and data capabilities include ${dbText}, with applied experience in analytics and production-oriented workflows.`
  }

  if (q.includes('project') || q.includes('2026') || q.includes('relevant')) {
    const topProjects = PROJECTS.slice(0, 3)
      .map((p) => `${p.name} (${p.period})`)
      .join('; ')
    return `For current hiring relevance, Asmita's strongest projects are ${topProjects}. These projects highlight backend architecture, data processing, and practical software engineering fundamentals aligned with modern software roles.`
  }

  return `${ME.name} is a Computer Science student at Wayne State University with full-stack and backend experience across internships and academic projects. She has hands-on work in Python/Flask services, REST API design, PostgreSQL schema modeling, and interactive data-driven applications. For additional details, you can request a role-specific summary or contact her at ${ME.email}.`
}

function buildSystemPrompt() {
  const experienceText = EXPERIENCE.map((exp) => {
    const bullets = Array.isArray(exp.points) ? exp.points.join(' ') : exp.desc
    return `${exp.role} @ ${exp.company} (${exp.date}, ${exp.location}): ${bullets}`
  }).join('\n')

  const projectText = PROJECTS.map((p) => {
    return `${p.name} (${p.period}) - ${p.desc}. Tech: ${p.tags.join(', ')}. Link: ${p.link}`
  }).join('\n')

  const skillsText = SKILLS.map((group) => {
    return `${group.group}: ${group.items.map((s) => s.name).join(', ')}`
  }).join('\n')

  return `You are Asmita Bhandari's portfolio assistant for recruiters, hiring managers, and collaborators.

Use this profile as source of truth:
Name: ${ME.name}
Role: ${ME.role}
Location: ${ME.location}
Email: ${ME.email}
GitHub: ${ME.links.github}
LinkedIn: ${ME.links.linkedin}
Resume: /Asmita_Bhandari_Resume.pdf

Bio:
${ME.bio}
${ME.bio2}

Experience:
${experienceText}

Projects:
${projectText}

Skills:
${skillsText}

Response rules:
- Use a formal, professional tone.
- Keep responses concise, clear, and recruiter-friendly.
- Prioritize measurable impact, responsibilities, and technologies.
- Avoid slang, emojis, and overly casual phrasing.
- Be factual and avoid hype.
- When asked about contact, include email, GitHub, and LinkedIn.
- If asked about Youth Tank Detroit internship, include:
Designed and implemented RESTful backend services in Python/Flask to manage structured urban infrastructure and community planning datasets.
Modeled relational database schemas in PostgreSQL to support multi-neighborhood connectivity mapping across a 27.5-mile greenway system.
Integrated third-party mapping APIs to build interactive, data-driven visualizations for public-facing web platforms.
- If information is missing, say that directly and suggest contacting ${ME.email}.`
}

function AssistantMessage({ text }) {
  return (
    <div className="cp-row cp-row-asst">
      <div className="cp-avatar cp-avatar-asst">AI</div>
      <div className="cp-bubble cp-bubble-asst">{text}</div>
    </div>
  )
}

function UserMessage({ text }) {
  return (
    <div className="cp-row cp-row-user">
      <div className="cp-bubble cp-bubble-user">{text}</div>
      <div className="cp-avatar cp-avatar-user">ME</div>
    </div>
  )
}

export default function CopilotChat({ onClose }) {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const bottomRef = useRef(null)

  const suggestions = useMemo(() => ([
    'Provide a concise professional summary of Asmita.',
    'What was Asmita\'s impact at Youth Tank Detroit?',
    'Which backend skills are strongest for software roles?',
    'Which projects are most relevant for 2026 hiring trends?',
    'Share the best way to contact Asmita for opportunities.',
  ]), [])

  useEffect(() => {
    try {
      const cached = localStorage.getItem(STORAGE_KEY)
      if (cached) setMessages(JSON.parse(cached))
    } catch {
      // Ignore malformed local cache.
    }
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages.slice(-30)))
    } catch {
      // Ignore storage failures.
    }
  }, [messages])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  const sendMessage = useCallback(async (raw) => {
    const content = raw.trim()
    if (!content || loading) return

    const nextMessages = [...messages, { role: 'user', content }]
    setMessages(nextMessages)
    setInput('')
    setError('')
    setLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          stream: false,
          temperature: 0.4,
          max_tokens: 700,
          messages: [
            { role: 'system', content: buildSystemPrompt() },
            ...nextMessages.map((m) => ({ role: m.role, content: m.content })),
          ],
        }),
      })

      if (!response.ok) {
        const body = await response.json().catch(() => ({}))
        throw new Error(body?.error || `Request failed with ${response.status}`)
      }

      const data = await response.json()
      const answer = data?.choices?.[0]?.message?.content?.trim() || 'No response generated.'
      setMessages((prev) => [...prev, { role: 'assistant', content: answer }])
    } catch (err) {
      const fallback = buildLocalFallbackReply(content)
      setMessages((prev) => [...prev, { role: 'assistant', content: fallback }])
      setError('Live AI service is unavailable right now. Displaying local portfolio response.')
    } finally {
      setLoading(false)
    }
  }, [loading, messages])

  const onKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage(input)
    }
  }

  return (
    <div className="cp-shell">
      <div className="cp-header">
        <div className="cp-title">Asmita Candidate Assistant</div>
        <div className="cp-actions">
          <button className="cp-btn" onClick={() => setMessages([])}>New</button>
          <button className="cp-btn" onClick={onClose}>Close</button>
        </div>
      </div>

      <div className="cp-workspace">workspace: asmita-bhandari-portfolio</div>

      <div className="cp-messages">
        {messages.length === 0 && (
          <div className="cp-empty">
            <p>Ask for role-aligned summaries of Asmita's experience, projects, and skills.</p>
            <div className="cp-suggestions">
              {suggestions.map((s) => (
                <button key={s} className="cp-suggest" onClick={() => sendMessage(s)}>
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((m, idx) => (
          m.role === 'user'
            ? <UserMessage key={`${m.role}-${idx}`} text={m.content} />
            : <AssistantMessage key={`${m.role}-${idx}`} text={m.content} />
        ))}

        {loading && <AssistantMessage text="Preparing a concise response..." />}
        {error && <div className="cp-error">{error}</div>}
        <div ref={bottomRef} />
      </div>

      <div className="cp-input-wrap">
        <textarea
          className="cp-input"
          rows={2}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder="Ask for a recruiter-focused summary of Asmita's qualifications..."
          disabled={loading}
        />
        <button className="cp-send" onClick={() => sendMessage(input)} disabled={loading || !input.trim()}>
          Send
        </button>
      </div>

      <style>{`
        .cp-shell { display:flex; flex-direction:column; height:100%; background:var(--bg, #1e1e1e); color:var(--text, #d4d4d4); }
        .cp-header { display:flex; align-items:center; justify-content:space-between; padding:10px; border-bottom:1px solid var(--border, #2d2d2d); }
        .cp-title { font-size:12px; font-weight:600; }
        .cp-actions { display:flex; gap:6px; }
        .cp-btn { border:1px solid var(--border, #2d2d2d); background:transparent; color:var(--dim, #9aa0a6); padding:3px 8px; border-radius:4px; cursor:pointer; }
        .cp-btn:hover { color:var(--text, #d4d4d4); background:rgba(255,255,255,0.05); }
        .cp-workspace { padding:6px 10px; font-size:11px; color:var(--dim, #9aa0a6); border-bottom:1px solid var(--border, #2d2d2d); }
        .cp-messages { flex:1; overflow:auto; padding:10px; }
        .cp-empty p { margin:0 0 8px; color:var(--dim, #9aa0a6); font-size:12px; }
        .cp-suggestions { display:grid; gap:6px; }
        .cp-suggest { text-align:left; background:rgba(255,255,255,0.03); border:1px solid var(--border, #2d2d2d); color:var(--text, #d4d4d4); padding:8px; border-radius:6px; cursor:pointer; font-size:12px; }
        .cp-suggest:hover { border-color:#007acc; background:rgba(0,122,204,0.1); }
        .cp-row { display:flex; gap:8px; margin:10px 0; align-items:flex-start; }
        .cp-row-user { justify-content:flex-end; }
        .cp-avatar { width:24px; height:24px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:10px; flex-shrink:0; }
        .cp-avatar-asst { background:rgba(0,122,204,0.2); border:1px solid rgba(0,122,204,0.45); }
        .cp-avatar-user { background:rgba(78,201,176,0.2); border:1px solid rgba(78,201,176,0.45); }
        .cp-bubble { max-width:82%; padding:9px 10px; border-radius:8px; white-space:pre-wrap; line-height:1.5; font-size:12px; }
        .cp-bubble-asst { background:rgba(255,255,255,0.03); border:1px solid var(--border, #2d2d2d); }
        .cp-bubble-user { background:rgba(0,122,204,0.13); border:1px solid rgba(0,122,204,0.3); }
        .cp-error { margin-top:8px; color:#f88; font-size:12px; }
        .cp-input-wrap { border-top:1px solid var(--border, #2d2d2d); padding:8px; display:flex; gap:8px; }
        .cp-input { flex:1; resize:none; border:1px solid var(--border, #2d2d2d); background:rgba(255,255,255,0.03); color:var(--text, #d4d4d4); border-radius:6px; padding:8px; font-size:12px; outline:none; }
        .cp-input:focus { border-color:#007acc; }
        .cp-send { width:76px; border:none; background:#007acc; color:white; border-radius:6px; cursor:pointer; font-size:12px; }
        .cp-send:disabled { opacity:0.45; cursor:not-allowed; }
      `}</style>
    </div>
  )
}
