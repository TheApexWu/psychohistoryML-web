// src/components/Discovery.jsx
export default function Discovery({ number, text }) {
  return (
    <li>
      <span className="discovery-num">
        {String(number).padStart(2, '0')}
      </span>
      <span className="discovery-text">{text}</span>
    </li>
  )
}