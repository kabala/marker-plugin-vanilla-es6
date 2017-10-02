const defaults = {
  img: '',
  selector: 'content',
  width: '480px',
  height: '300px',
  bgImg: '',
  markers: [
    {
      type: '%',
      x: '140',
      y: '140',
      h2: 'Title',
      h3: 'Subtitle',
      p: 'paragraph',
      img: 'path to image here!'
    }
  ],
}

export default class Widget {
  constructor(opts = {}) {
    this.opts = this.applyConfig(defaults, opts)

    this.init()
  }

  // Just merges the user config. with defaults.
  applyConfig(base, user) {
    return Object.assign(defaults, user)
  }

  // starts everything!
  init() {
    // creates the Widget DOM
    this.createDom()
    // adds event listeners
    this.createEventListeners()
  }

  //  get base element in the dom and creates its content dynamically.
  createDom() {
    // find node
    const baseSelector = `.${this.opts.selector}`
    const node = document.querySelector(baseSelector)
    if (!node) {
      Error()
    }

    // Create Elements
    const parentDiv = this.createElement('div', 'marker-widget') // parent div
    const markerDiv = this.createElement('div', 'markers-container') // markers container
    const markerList = this.createElement('ul', 'marker-list') // marker list as ul
    const bigImg = this.createElement('img', 'big-img')
    const listFragment = document.createDocumentFragment()

    bigImg.src = this.opts.img

    // create markers list using constructor data
    this.opts.markers.map((data) => {
      const marker = this.createElement('li', 'marker')
      const markerContent = this.createElement('div', 'marker-content')
      const markerTooltip = this.createElement('div', 'marker-tooltip')
      const markerIcon = this.createElement('div', 'marker-icon')

      const markerTitle = this.createElement('h2', 'm-title')
      const markerSub = this.createElement('h3', 'm-sub')
      const markerText = this.createElement('p', 'm-text')
      const markerImg = this.createElement('div', 'm-img')
      const markerClose = this.createElement('button', 'm-close')

      // add coordinates coming from json
      marker.style.left = `${data.x}${data.type}`
      marker.style.top = `${data.y}${data.type}`

      // add data coming from json inside each tag
      markerTitle.innerText = data.h2
      markerSub.innerText = data.h3
      markerText.innerText = data.p
      markerImg.style.backgroundImage = `url(${data.img})`
      markerTooltip.innerText = data.tooltip
      markerClose.innerText = 'close'

      // create the structure of each marker dynamically
      const markerFragment = document.createDocumentFragment()
      markerFragment.append(markerTitle, markerSub, markerImg, markerText, markerClose)
      markerContent.append(markerFragment)
      marker.appendChild(markerIcon)
      marker.appendChild(markerContent)
      marker.appendChild(markerTooltip)

      listFragment.appendChild(marker)
    })

    // insert all the elements into dom
    markerList.appendChild(listFragment)
    markerDiv.appendChild(markerList)
    parentDiv.appendChild(markerDiv)
    parentDiv.appendChild(bigImg)
    node.append(parentDiv)
  }

  createEventListeners(){
    // adds a click event and a class toggler to the markers
    const elements = document.querySelectorAll('.marker-widget .marker')
    for (let i = 0; i < elements.length; i++) {
      elements[i].querySelector('.marker-icon').addEventListener('click', function(el) {
          el.preventDefault()

          // first of all, remove all active markers
          Array.from(elements).map((i) => {
            i.classList.remove('active')
          })
          // then add an 'active' class just to this clicked element
          this.parentElement.classList.toggle('active')
        }
      )

      // adds a click event to close button inside each marker
      elements[i].querySelector('.m-close').addEventListener('click', function(el) {
        el.preventDefault()
          this.parentElement.parentElement.classList.toggle('active')
      })

      // adds hover dynamically because hover effect look buggy if only css is used 
      this.multipleEventsListeners(
        elements[i].querySelector('.marker-icon'),
        'mouseover mouseout',
        function() {
          this.parentElement.classList.toggle('hovered')
        }
      )
    }
  }
  
  // creates elements in a smart way
  createElement(selector, className = null) {
    const elem = document.createElement(selector)
    if(className != null) {
      elem.className = className
    }
    return elem
  }

  /* 
    helps to create multiple events listeners
    that will use the same logic
  */
  multipleEventsListeners(elem, events, func) {
    var event = events.split(' ');
    for (var i = 0; i < event.length; i++) {
      elem.addEventListener(event[i], func, false);
    }
  }
}
