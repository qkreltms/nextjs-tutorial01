/**
 * Do Not Fetch an API Route from getStaticProps or getStaticPaths
 */
export default (req, res) => {
    res.status(200).json({ text: 'Hello' })
  }