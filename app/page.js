import StudentInfo from './StudentInfo'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
        <h1>CPRG 306: Web Development 2 - Assignments</h1>
        <StudentInfo />
        <ul>
          <li><Link href="week2">week2</Link></li>
          <li><Link href="week3">week3</Link></li>
          <li><Link href="week4">week4</Link></li>
        </ul>
        
    </main>
  )
}
