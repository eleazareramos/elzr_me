import Bio from '../components/About/Bio'
import Resume from '../components/About/Resume'
import useOnBrowser from '../hooks/useOnBrowser'

const AboutPage = () => {
  const onBrowser = useOnBrowser()
  return (
    <>
      {onBrowser ? (
        <>
          <Bio />
          <Resume />
        </>
      ) : null}
    </>
  )
}

export default AboutPage
