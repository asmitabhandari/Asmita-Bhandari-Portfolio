import { useReveal } from '../hooks/useReveal'
import { ME, EDUCATION } from '../data'

export default function AboutPage() {
  useReveal('about')

  const focus = [
    ['🔭', 'Building scalable backend systems & robust web applications'],
    ['💻', 'Full-stack development with React, Node.js, and Python'],
    ['🌱', 'Currently exploring cloud infrastructure and DevOps practices'],
    ['💬', 'Talk to me about Python, React, APIs, and Backend Development'],
    ['⚡', 'Using my skills to build impactful solutions and learn every day'],
    ['✨', 'Passionate about clean code and thoughtful design'],
  ]

  return (
    <div className="px-12 py-12 max-w-[940px]">
      {/* Page comment */}
      <p className="text-vscode-gcm italic text-[14px] mb-3">&lt;!-- about.html - Asmita Bhandari --&gt;</p>
      <h2 className="font-display text-[35px] font-extrabold text-vscode-bright tracking-tight mb-1">
        About Me
      </h2>
      <p className="text-vscode-dim text-[14px] mb-8">// who I am · what I do · where I build</p>

      {/* Bio card */}
      <div className="reveal bg-white/[0.025] border border-vscode-border rounded p-6 mb-4">
        <p className="text-[13px] text-vscode-dim leading-[1.9]">
          Hi! I'm{' '}
          <strong className="text-vscode-blue font-medium">Asmita Bhandari</strong>
          , a Computer Science student at{' '}
          <strong className="text-vscode-blue font-medium">Wayne State University</strong>
          {' '}passionate about building{' '}
          <strong className="text-vscode-blue font-medium">scalable web applications</strong>
          {' '}and{' '}
          <strong className="text-vscode-blue font-medium">robust backend systems</strong>.
          I thrive on solving complex problems with{' '}
          <strong className="text-vscode-blue font-medium">Python, React, and modern web technologies</strong>.
          Currently working as a{' '}
          <strong className="text-vscode-blue font-medium">Student Software Engineer Intern at Youth Tank Detroit</strong>
          {' '}and{' '}
          <strong className="text-vscode-blue font-medium">Full Stack Developer Intern at Brilliant</strong>,
          where I'm building impactful applications and sharpening my skills in full-stack development.
        </p>
      </div>

      {/* Current Focus */}
      <div className="reveal bg-white/[0.025] border border-vscode-border rounded p-5 mb-4 hover:border-white/[0.12] transition-colors">
        <div className="text-[18px] uppercase tracking-[0.2em] text-vscode-green mb-3">
          Current Focus
        </div>
        <div className="grid grid-cols-2 gap-x-6">
          {focus.map(([icon, text]) => (
            <div key={text} className="flex gap-2.5 mb-2.5 text-xs text-vscode-dim leading-relaxed">
              <span>{icon}</span>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="reveal">
        <div className="text-[18px] uppercase tracking-[0.2em] text-vscode-green mb-3">
          Education
        </div>
        <div className="flex flex-col gap-3">
          {EDUCATION.map((edu) => (
            <div
              key={edu.id}
              className="bg-white/[0.025] border border-vscode-border rounded p-5 hover:border-white/[0.12] transition-colors"
            >
              <div className="flex items-start justify-between gap-4 mb-1">
                <div>
                  <span className="text-[15px] font-semibold text-vscode-bright block">
                    {edu.icon} {edu.institution}
                  </span>
                  {edu.university && (
                    <span className="text-[11px] text-vscode-dim">{edu.university}</span>
                  )}
                </div>
                <span className="text-[10px] text-vscode-dim whitespace-nowrap mt-0.5">{edu.period}</span>
              </div>
              <p className="text-xs text-vscode-blue mt-1.5">{edu.degree}</p>
              {edu.minor && (
                <p className="text-[11px] text-vscode-dim mt-0.5">{edu.minor}</p>
              )}
              <p className="text-[11px] text-vscode-green mt-1">{edu.gpa}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}