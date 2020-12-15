/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  { loading: fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=5fccd68db2087f1b06590759").then(body => body.text()), isAsync: false },
  { loading: fetch("js/webflow.js").then(body => body.text()), isAsync: false },
]

let Controller

class HomeAuthView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('..\controllers/HomeAuthController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = HomeAuthView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    const htmlEl = document.querySelector('html')
    htmlEl.dataset['wfPage'] = '5fd26d81dfed3f40ec3b752e'
    htmlEl.dataset['wfSite'] = '5fccd68db2087f1b06590759'

    scripts.concat(null).reduce((active, next) => Promise.resolve(active).then((active) => {
      const loading = active.loading.then((script) => {
        new Function(`
          with (this) {
            eval(arguments[0])
          }
        `).call(window, script)

        return next
      })

      return active.isAsync ? next : loading
    }))
  }

  render() {
    const proxies = HomeAuthView.Controller !== HomeAuthView ? transformProxies(this.props.children) : {

    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(css\\normalize.css);
          @import url(css\\webflow.css);
          @import url(css\\coquus.webflow.css);
        ` }} />
        <span className="af-view">
          <div className="af-class-app-body">
            <div style={{opacity: 1}} className="af-class-app-auth-modal af-class-signup-modal">
              <div className="af-class-app-auth-div">
                <div data-w-id="53c7b13b-a011-0f3f-c933-54abd5353e1a" className="af-class-auth-close"></div>
                <div className="af-class-app-authheader">Register for an Account</div>
                <div className="af-class-app-auth-sub">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</div>
                <div className="w-form">
                  <form id="email-form-2" name="email-form-2" data-name="Email Form 2"><input type="text" className="af-class-app-auth-textfield w-input" maxLength={256} name="Full-Name" data-name="Full Name" placeholder="Full Name" id="Full-Name" /><input type="text" className="af-class-app-auth-textfield w-input" maxLength={256} name="email" data-name="email" placeholder="Email Address" id="email" /><input type="text" className="af-class-app-auth-textfield w-input" maxLength={256} name="phone" data-name="phone" placeholder="Phone Number" id="phone" /><input type="text" className="af-class-app-auth-textfield w-input" maxLength={256} name="password" data-name="password" placeholder="Password" id="password" />
                    <a href="#" className="af-class-app-button w-button">Get Started</a>
                  </form>
                  <div className="w-form-done">
                    <div>Thank you! Your submission has been received!</div>
                  </div>
                  <div className="w-form-fail">
                    <div>Oops! Something went wrong while submitting the form.</div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{opacity: 1}} className="af-class-app-auth-modal af-class-login-modal">
              <div className="af-class-app-auth-div">
                <div data-w-id="d438c752-840a-1615-6219-0dc04b857a2e" className="af-class-auth-close af-class-signup"></div>
                <div className="af-class-app-authheader">Login into your account</div>
                <div className="af-class-app-auth-sub">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</div>
                <div className="w-form">
                  <form id="email-form-2" name="email-form-2" data-name="Email Form 2"><input type="text" className="af-class-app-auth-textfield w-input" maxLength={256} name="email-2" data-name="Email 2" placeholder="Email Address" id="email-2" /><input type="text" className="af-class-app-auth-textfield w-input" maxLength={256} name="password-2" data-name="Password 2" placeholder="Password" id="password-2" />
                    <a href="dashboard.html" className="af-class-app-button w-button">Login into account</a>
                  </form>
                  <div className="w-form-done">
                    <div>Thank you! Your submission has been received!</div>
                  </div>
                  <div className="w-form-fail">
                    <div>Oops! Something went wrong while submitting the form.</div>
                  </div>
                </div>
              </div>
            </div>
            <div data-collapse="medium" data-animation="default" data-duration={400} role="banner" className="af-class-app-navbar w-nav">
              <a href="#" className="af-class-app-brand w-nav-brand">
                <div className="af-class-app-logo-text">L<span className="af-class-text-span">O</span>G<span className="af-class-text-span-2">O</span></div>
              </a>
              <nav role="navigation" className="w-nav-menu">
                <a href="#" className="af-class-app-nav-link w-nav-link">Home</a>
                <a href="#" className="af-class-app-nav-link w-nav-link">About</a>
                <a href="#" className="af-class-app-nav-link w-nav-link">Shop</a>
                <a href="#" className="af-class-app-nav-link w-nav-link">Support</a>
                <div data-hover data-delay={0} className="w-dropdown">
                  <div className="af-class-dropdown-toggle w-dropdown-toggle">
                    <div className="af-class-icon w-icon-dropdown-toggle" />
                    <div className="af-class-text-block-5">Hii Tobiloba</div>
                  </div>
                  <nav className="af-class-dropdown-list w-dropdown-list">
                    <a href="dashboard.html" className="af-class-dropdown-link w-dropdown-link">Dashboard</a>
                    <a href="dashboard.html" className="af-class-dropdown-link w-dropdown-link">Profile</a>
                    <a href="dashboard.html" className="af-class-dropdown-link w-dropdown-link">Logout</a>
                  </nav>
                </div>
              </nav>
              <div className="w-nav-button">
                <div className="af-class-menu-icon w-icon-nav-menu" />
              </div>
            </div>
            <div className="af-class-app-banner">
              <div className="af-class-app-banner-heading">
                <div className="af-class-app-banner-header">Order food anytime &amp; anywhere</div>
                <div className="af-class-app-banner-sub">Hey! Our delicious food is waiting for you, we are always near to you</div>
                <div className="af-class-form-block-3 w-form">
                  <form id="email-form" name="email-form" data-name="Email Form">
                    <div className="w-row">
                      <div className="w-col w-col-9"><input type="text" className="af-class-app-banner-search-field w-input" maxLength={256} name="app-banner-search" data-name="app-banner-search" placeholder="Search for something..." id="app-banner-search" /></div>
                      <div className="w-col w-col-3">
                        <a href="#" className="af-class-app-banner-search-btn w-button">Let's find it</a>
                      </div>
                    </div>
                  </form>
                  <div className="w-form-done">
                    <div>Thank you! Your submission has been received!</div>
                  </div>
                  <div className="w-form-fail">
                    <div>Oops! Something went wrong while submitting the form.</div>
                  </div>
                </div>
              </div>
              <div style={{WebkitTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transformStyle: 'preserve-3d'}} className="af-class-app-banner-image" />
            </div>
            <div className="af-class-app-section-1">
              <div className="af-class-section-1-row w-row">
                <div className="af-class-app-section-1-col-1 w-col w-col-6 w-col-stack">
                  <div className="af-class-div-block-3" />
                </div>
                <div className="af-class-app-section-1-col-2 w-col w-col-6 w-col-stack">
                  <h1 className="af-class-app-section-header">Getting delicious meals doesn't have to be stressful</h1>
                  <div className="af-class-text-block-3">With just few clicks you can get your favorite food delivered to your doorstep with the following steps</div>
                  <div className="af-class-app-section-1-steps-row w-row">
                    <div className="af-class-app-section-1-step-col-1 w-col w-col-2 w-col-small-2 w-col-tiny-2">
                      <div className="af-class-app-section-1-step-icon">1</div>
                    </div>
                    <div className="af-class-app-section-1-step-col-2 w-col w-col-10 w-col-small-10 w-col-tiny-10">
                      <div className="af-class-app-section-1-step-col-2-div">
                        <div className="af-class-app-section-1-step-col-2-div-header">Register for an account</div>
                        <div className="af-class-app-section-1-step-col-2-div-sub">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</div>
                      </div>
                    </div>
                  </div>
                  <div className="af-class-app-section-1-steps-row w-row">
                    <div className="af-class-app-section-1-step-col-1 w-col w-col-2 w-col-small-2 w-col-tiny-2">
                      <div className="af-class-app-section-1-step-icon">2</div>
                    </div>
                    <div className="af-class-app-section-1-step-col-2 w-col w-col-10 w-col-small-10 w-col-tiny-10">
                      <div className="af-class-app-section-1-step-col-2-div">
                        <div className="af-class-app-section-1-step-col-2-div-header">Choose a meal of your choice</div>
                        <div className="af-class-app-section-1-step-col-2-div-sub">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</div>
                      </div>
                    </div>
                  </div>
                  <div className="af-class-app-section-1-steps-row w-row">
                    <div className="af-class-app-section-1-step-col-1 w-col w-col-2 w-col-small-2 w-col-tiny-2">
                      <div className="af-class-app-section-1-step-icon">3</div>
                    </div>
                    <div className="af-class-app-section-1-step-col-2 w-col w-col-10 w-col-small-10 w-col-tiny-10">
                      <div className="af-class-app-section-1-step-col-2-div">
                        <div className="af-class-app-section-1-step-col-2-div-header">Receive at your doorstep</div>
                        <div className="af-class-app-section-1-step-col-2-div-sub">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</div>
                      </div>
                    </div>
                  </div>
                  <a href="#" className="af-class-app-button af-class-section-1-btn w-button">Get Started</a>
                </div>
              </div>
            </div>
            <div className="af-class-app-section-2">
              <div className="af-class-app-section-2-header">Our Top Restaurants</div>
              <div className="af-class-text-block-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
              <div className="af-class-app-section-2-flex-row">
                <div className="af-class-app-section-2-flex-col">
                  <div className="af-class-app-section-2-flex-col-div af-class-_1">
                    <div className="af-class-app-section-2-flex-col-cover">
                      <div className="af-class-app-section-2-flex-image-heading">
                        <div className="af-class-app-section-2-flex-header">Lorem Ipsum dolor</div>
                        <div className="af-class-app-section-2-flex-sub">This is some text inside of a div block.</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="af-class-app-section-2-flex-col">
                  <div className="af-class-app-section-2-flex-col-div af-class-_2">
                    <div className="af-class-app-section-2-flex-col-cover">
                      <div className="af-class-app-section-2-flex-image-heading">
                        <div className="af-class-app-section-2-flex-header">Lorem Ipsum dolor</div>
                        <div className="af-class-app-section-2-flex-sub">This is some text inside of a div block.</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="af-class-app-section-2-flex-col">
                  <div className="af-class-app-section-2-flex-col-div af-class-_3">
                    <div className="af-class-app-section-2-flex-col-cover">
                      <div className="af-class-app-section-2-flex-image-heading">
                        <div className="af-class-app-section-2-flex-header">Lorem Ipsum dolor</div>
                        <div className="af-class-app-section-2-flex-sub">This is some text inside of a div block.</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="af-class-app-section-2-flex-col">
                  <div className="af-class-app-section-2-flex-col-div af-class-_4">
                    <div className="af-class-app-section-2-flex-col-cover">
                      <div className="af-class-app-section-2-flex-image-heading">
                        <div className="af-class-app-section-2-flex-header">Lorem Ipsum dolor</div>
                        <div className="af-class-app-section-2-flex-sub">This is some text inside of a div block.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="af-class-app-section-3">
              <div className="w-row">
                <div className="af-class-app-section-3-col-1 w-col w-col-6 w-col-stack">
                  <h1 className="af-class-app-section-header">Lorem ipsum dolor sit amet consectetur adipiscing elit</h1>
                  <div className="af-class-text-block-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br /><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br /><br /><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                  <a href="#" className="af-class-app-button af-class-section-1-btn w-button">Get Started</a>
                </div>
                <div className="af-class-app-section-3-col-2 w-col w-col-6 w-col-stack">
                  <div className="af-class-app-section-3-image" />
                </div>
              </div>
            </div>
            <footer id="footer" className="af-class-footer">
              <div className="af-class-footer-flex-container">
                <a href="#" className="af-class-footer-logo-link w-inline-block">
                  <div className="af-class-app-logo-text af-class-footer-type">L<span className="af-class-text-span">O</span>G<span className="af-class-text-span-2">O</span></div>
                </a>
                <div className="af-class-div-block-7">
                  <h2 className="af-class-footer-heading">Heading Label</h2>
                  <ul role="list" className="w-list-unstyled">
                    <li>
                      <a href="#" className="af-class-footer-link">Text Link</a>
                    </li>
                    <li>
                      <a href="#" className="af-class-footer-link">Text Link</a>
                    </li>
                    <li>
                      <a href="#" className="af-class-footer-link">Text Link</a>
                    </li>
                    <li>
                      <a href="#" className="af-class-footer-link">Text Link</a>
                    </li>
                    <li>
                      <a href="#" className="af-class-footer-link">Text Link</a>
                    </li>
                  </ul>
                </div>
                <div className="af-class-div-block-8">
                  <h2 className="af-class-footer-heading">Heading Label</h2>
                  <ul role="list" className="w-list-unstyled">
                    <li>
                      <a href="#" className="af-class-footer-link">Text Link</a>
                    </li>
                    <li>
                      <a href="#" className="af-class-footer-link">Text Link</a>
                    </li>
                    <li>
                      <a href="#" className="af-class-footer-link">Text Link</a>
                    </li>
                    <li>
                      <a href="#" className="af-class-footer-link">Text Link</a>
                    </li>
                    <li>
                      <a href="#" className="af-class-footer-link">Text Link</a>
                    </li>
                  </ul>
                </div>
                <div className="af-class-div-block-9">
                  <h2 className="af-class-footer-heading">Heading Label</h2>
                  <ul role="list" className="w-list-unstyled">
                    <li>
                      <a href="#" className="af-class-footer-link">Text Link</a>
                    </li>
                    <li>
                      <a href="#" className="af-class-footer-link">Text Link</a>
                    </li>
                  </ul>
                </div>
                <div className="af-class-div-block-10">
                  <h2 className="af-class-footer-heading">Heading Label</h2>
                  <ul role="list" className="w-list-unstyled">
                    <li>
                      <a href="#" className="af-class-footer-link">Text Link</a>
                    </li>
                    <li>
                      <a href="#" className="af-class-footer-link">Text Link</a>
                    </li>
                    <li>
                      <a href="#" className="af-class-footer-link">Text Link</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div>Copyright © 2020 My Company. All rights reserved.</div>
            </footer>
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </span>
    )
  }
}

export default HomeAuthView

/* eslint-enable */