import React from 'react'
import './Home.css'

export default function home() {
    return (
        <div>
            <section>
      <div className="container1">
        <div className="side1">
          <div className="side1sub1">
            <p className="intro">
              We are a one stop <br />
              solution for all your <br />
              problems related to Loan, <br />
              Payroll Management , <br />
              Insurance Health Benefits etc.
            </p>
          </div>
          <div className="side1sub2">
            <button className="btn1">More</button>
            <button className="btn2">Contact</button>
          </div>
        </div>

        <div className="side2">
          <div className="side2sub1">
            <img src="https://user-images.githubusercontent.com/79800224/126149004-a6d0ed20-7aa6-47fd-8a29-5493af764e7c.png" alt="" />
          </div>
          <div className="side2sub2">
            <div className="banner">
              <h1 className="banner-heading">
                <span className="heading-1">Payroll</span>
                <span className="heading-2">HR</span>
                <span className="heading-3">Hiring</span>
                <span className="heading-4">Loan</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
            
        </div>
    )
}
