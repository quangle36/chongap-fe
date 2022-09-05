import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1>This is the home page</h1>
      <Link className={''} to="/about">
        Click to view our about page
      </Link>
      <Link to="/contact">Click to view our contact page</Link>
      {/* <Button className={'bg-teal-600'}></Button> */}
    </div>
  )
}

export default Home
