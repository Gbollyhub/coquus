/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'
import Header from '../../components/Dashboard/Header'
import Sidebar from '../../components/Dashboard/Sidebar'
const scripts = [
  { loading: fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=5fccd68db2087f1b06590759").then(body => body.text()), isAsync: false },
  { loading: fetch("js/webflow.js").then(body => body.text()), isAsync: false },
]


class DashboardView extends React.Component {


  componentDidMount() {
    const htmlEl = document.querySelector('html')
    htmlEl.dataset['wfPage'] = '5fd175d1f64b28871a6dc8cc'
    htmlEl.dataset['wfSite'] = '5fccd68db2087f1b06590759'

    scripts.concat(null).reduce((active, next) => Promise.resolve(active).then((active) => {
      const loading = active.loading.then((script) => {
        new Function(`
          with (this) ${
            eval(arguments[0])
          }
        `).call(window, script)

        return next
      })

      return active.isAsync ? next : loading
    }))
  }

  render() {
    const proxies = DashboardView.Controller !== DashboardView ? transformProxies(this.props.children) : {

    }

    return (
      <span>
      <style dangerouslySetInnerHTML={{ __html: `
        @import url(css\\normalize.css);
        @import url(css\\webflow.css);
        @import url(css\\coquus.webflow.css);
      ` }} />
      <span className="af-view">
        <div className="af-class-body">
          <Header/>
          <div className="af-class-dashboard-section">
            <div className="af-class-dashboard-col-1">
             <Sidebar/>
            </div>
            <div className="af-class-dashboard-col-2">
              <div className="af-class-dasboard-col-2-header"><span className="af-class-text-span-5">Hii</span> Tobi!</div>
              <div className="af-class-dashboard-overview-sub">Lorem ipsum dolor sit amet, consectetur adipiscing elit sodor.</div>
              <div className="af-class-dashboard-overview-div">
                <div className="af-class-dashboard-overview-box af-class-wallet">
                  <div className="af-class-overview-box-header">Wallet</div>
                  <div className="af-class-overview-header-value">20,000.<span className="af-class-text-span-4">00</span></div>
                </div>
                <div className="af-class-dashboard-overview-box af-class-orders">
                  <div className="af-class-overview-box-header">Orders</div>
                  <div className="af-class-overview-header-value">21<span className="af-class-text-span-4" /></div>
                </div>
                <div className="af-class-dashboard-overview-box af-class-transactions">
                  <div className="af-class-overview-box-header">Transactions</div>
                  <div className="af-class-overview-header-value">1000<span className="af-class-text-span-4" /></div>
                </div>
                <div className="af-class-dashboard-overview-box af-class-transaction">
                  <div className="af-class-overview-box-header">Notifications</div>
                  <div className="af-class-overview-header-value">400<span className="af-class-text-span-4" /></div>
                </div>
              </div>
              <div className="w-row">
                <div className="w-col w-col-6">
                  <div className="af-class-overview-sub-header">Recent Transactions</div>
                  <div className="af-class-overview-table-div" />
                </div>
                <div className="w-col w-col-6">
                  <div className="af-class-overview-sub-header">Recent Orders</div>
                  <div className="af-class-overview-table-div" />
                </div>
              </div>
              <div data-animation="slide" data-duration={500} data-infinite={1} className="af-class-dashboard-slider w-slider">
                <div className="af-class-dashboard-slider-mask w-slider-mask">
                  <div className="af-class-dashboard-slide w-slide">
                    <div className="af-class-dashboard-slider-card" />
                  </div>
                  <div className="af-class-dashboard-slide w-slide">
                    <div className="af-class-dashboard-slider-card" />
                  </div>
                  <div className="af-class-dashboard-slide w-slide">
                    <div className="af-class-dashboard-slider-card" />
                  </div>
                  <div className="af-class-dashboard-slide w-slide">
                    <div className="af-class-dashboard-slider-card" />
                  </div>
                  <div className="af-class-dashboard-slide w-slide" />
                  <div className="af-class-dashboard-slide w-slide" />
                </div>
                <div className="w-slider-arrow-left">
                  <div className="w-icon-slider-left" />
                </div>
                <div className="w-slider-arrow-right">
                  <div className="w-icon-slider-right" />
                </div>
                <div className="af-class-slide-nav w-slider-nav w-slider-nav-invert w-round" />
              </div>
            </div>
          </div>
          {/* [if lte IE 9]><![endif] */}
        </div>
      </span>
    </span>
    )
  }
}

export default DashboardView

/* eslint-enable */