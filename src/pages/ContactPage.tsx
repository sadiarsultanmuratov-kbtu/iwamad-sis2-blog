import Card from '../components/ui/Card'

function ContactPage() {
  return (
    <Card>
      <h1>Contact</h1>
      <p>Questions about a post, a study project or an internship? Write to me.</p>
      <ul className="link-list">
        <li>
          <a href="mailto:sadiarsultanmuratov@gmail.com">sadiarsultanmuratov@gmail.com</a>
        </li>
        <li>
          <a href="https://github.com/sadiarsultanmuratov-kbtu">github.com/sadiarsultanmuratov-kbtu</a>
        </li>
      </ul>
    </Card>
  )
}

export default ContactPage
