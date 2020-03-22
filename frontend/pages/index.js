import styled from 'styled-components'

function HomePage ({ className }) {
  return <div className={className}>
    <p>
        Welcome to Next.js!
    </p>
  </div>
}

export default styled(HomePage)`
    background: black;
`
