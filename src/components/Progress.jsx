export function ProgressBar({value=0,light=false}) {
  return <div className={`progress-track ${light?'progress-track-dark':''}`}><div className="progress-fill" style={{width:`${Math.max(0,Math.min(100,value))}%`}} /></div>
}
export function StatusPill({status}) {
  const labels = {'not-started':'NOT STARTED','in-progress':'IN PROGRESS','needs-practice':'NEEDS PRACTICE','mastered':'MASTERED'}
  return <span className={`status-pill status-${status}`}>{labels[status] || 'NOT STARTED'}</span>
}
