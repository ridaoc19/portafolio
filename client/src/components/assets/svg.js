
export function svg({ type, width = 18, height = 18, color }) {
  let element = document.querySelector(".style__svg")
  if (element && !color) {
    let elementStyle = window?.getComputedStyle(element, 'color');
    color = elementStyle.getPropertyValue('color');
  }
  switch (type) {
    case "grid":
      return <svg fill={color} width={width} height={height} viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <path d="M30 32h-10c-1.105 0-2-0.895-2-2v-10c0-1.105 0.895-2 2-2h10c1.105 0 2 0.895 2 2v10c0 1.105-0.895 2-2 2zM30 20h-10v10h10v-10zM30 14h-10c-1.105 0-2-0.896-2-2v-10c0-1.105 0.895-2 2-2h10c1.105 0 2 0.895 2 2v10c0 1.104-0.895 2-2 2zM30 2h-10v10h10v-10zM12 32h-10c-1.105 0-2-0.895-2-2v-10c0-1.105 0.895-2 2-2h10c1.104 0 2 0.895 2 2v10c0 1.105-0.896 2-2 2zM12 20h-10v10h10v-10zM12 14h-10c-1.105 0-2-0.896-2-2v-10c0-1.105 0.895-2 2-2h10c1.104 0 2 0.895 2 2v10c0 1.104-0.896 2-2 2zM12 2h-10v10h10v-10z"></path>
      </svg>
    case "list":
      return <svg fill={color} width={width} height={height} viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 14h-2c-0.552 0-1 0.448-1 1v2c0 0.552 0.448 1 1 1h2c0.552 0 1-0.448 1-1v-2c0-0.552-0.448-1-1-1zM31 15h-21c-0.552 0-1 0.448-1 1s0.448 1 1 1h21c0.552 0 1-0.448 1-1s-0.448-1-1-1zM3 22h-2c-0.552 0-1 0.448-1 1v2c0 0.552 0.448 1 1 1h2c0.552 0 1-0.448 1-1v-2c0-0.552-0.448-1-1-1zM31 23h-21c-0.552 0-1 0.448-1 1s0.448 1 1 1h21c0.552 0 1-0.448 1-1s-0.448-1-1-1zM3 6h-2c-0.552 0-1 0.448-1 1v2c0 0.552 0.448 1 1 1h2c0.552 0 1-0.448 1-1v-2c0-0.552-0.448-1-1-1zM10 9h21c0.552 0 1-0.448 1-1s-0.448-1-1-1h-21c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path>
      </svg>
    case "github":
      return <svg width={width} height={height} fill={color} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>github</title>
        <rect width="24" height="24" fill="none" />
        <path d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z" />
      </svg>
    case "delete":
      return <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 12V17" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 12V17" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 7H20" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    case "edit":
      return <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3.99997H6C4.89543 3.99997 4 4.8954 4 5.99997V18C4 19.1045 4.89543 20 6 20H18C19.1046 20 20 19.1045 20 18V12M18.4142 8.41417L19.5 7.32842C20.281 6.54737 20.281 5.28104 19.5 4.5C18.7189 3.71895 17.4526 3.71895 16.6715 4.50001L15.5858 5.58575M18.4142 8.41417L12.3779 14.4505C12.0987 14.7297 11.7431 14.9201 11.356 14.9975L8.41422 15.5858L9.00257 12.6441C9.08001 12.2569 9.27032 11.9013 9.54951 11.6221L15.5858 5.58575M18.4142 8.41417L15.5858 5.58575" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    case "add":
      return <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 6C3 4.34315 4.34315 3 6 3H14C15.6569 3 17 4.34315 17 6V14C17 15.6569 15.6569 17 14 17H6C4.34315 17 3 15.6569 3 14V6Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 7V18C21 19.6569 19.6569 21 18 21H7" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 10V7M10 10V13M10 10H13M10 10H7" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    case "add_position":
      return <svg fill={color} width={width} height={height} viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <title>badge</title>
        <path d="M25.307 12.195c-0.248 0-0.477-0.064-0.688-0.164l-2.271 3.935 2.286 3.961c0.188-0.076 0.391-0.122 0.605-0.122 0.9 0 1.63 0.729 1.63 1.63s-0.729 1.631-1.63 1.631c-0.901 0-1.631-0.668-1.631-1.568 0-0.015 0.009-0.041 0.009-0.041h-4.404l-2.373 4.050c0.465 0.287 0.791 0.777 0.791 1.363 0 0.9-0.73 1.631-1.631 1.631s-1.63-0.73-1.63-1.631c0-0.629 0.367-1.157 0.888-1.43l-2.335-3.983h-4.608c0 0.015 0.008 0.026 0.008 0.041 0 0.9-0.73 1.568-1.63 1.568s-1.63-0.73-1.63-1.631 0.73-1.63 1.63-1.63c0.278 0 0.528 0.088 0.758 0.211l2.338-4.050-2.31-4c-0.236 0.133-0.495 0.229-0.786 0.229-0.9 0-1.63-0.729-1.63-1.63s0.73-1.631 1.63-1.631c0.891 0 1.609 0.716 1.625 1.604h4.604l2.307-3.997c-0.504-0.276-0.86-0.794-0.86-1.41 0.001-0.902 0.731-1.631 1.631-1.631s1.631 0.729 1.631 1.631c0 0.573-0.314 1.054-0.764 1.345l2.346 4.062h4.469c0.016-0.888 0.734-1.604 1.625-1.604 0.9 0 1.631 0.73 1.631 1.631s-0.731 1.63-1.631 1.63zM16 11.584c-2.401 0-4.348 1.946-4.348 4.348s1.947 4.348 4.348 4.348c2.4 0 4.348-1.947 4.348-4.349s-1.948-4.347-4.348-4.347zM16 19.396c-1.914 0-3.465-1.551-3.465-3.465 0-1.913 1.551-3.464 3.465-3.464 1.913 0 3.465 1.551 3.465 3.464 0 1.915-1.552 3.465-3.465 3.465z"></path>
      </svg>
    case "information":
      return <svg width={width} height={height} viewBox="0 0 24 24" id="information-circle" data-name="Flat Color" xmlns="http://www.w3.org/2000/svg" className="icon flat-color"><circle id="primary" cx="12" cy="12" r="10" fill={color}></circle><path id="secondary" d="M12,17a1,1,0,0,1-1-1V12a1,1,0,0,1,2,0v4A1,1,0,0,1,12,17ZM12,6.5A1.5,1.5,0,1,0,13.5,8,1.5,1.5,0,0,0,12,6.5Z" fill="yellow"></path></svg>
    case "company":
      return <svg fill={color} width={width} height={height} version="1.1" id="_x31_" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
        <path id="_x31__1_" d="M118.8,118.4V72.8H90.6v-13H37.4v13h-13V40.3h11.9V29.4H24.4v-2.2h-2.2v2.2v10.8v32.5H9.8H9.2v45.6H0v4.3h128
       v-4.3H118.8z M105.8,91.3h-5.4v-5.4h5.4V91.3z M96,85.8v5.4h-5.4v-5.4H96z M37.4,91.3H32v-5.4h5.4V91.3z M27.7,85.8v5.4h-5.4v-5.4
       H27.7z M22.2,118.4V95.6h5.4v22.8H22.2z M32,118.4V95.6h5.4v22.8H32z M45,118.4V72.8h7.6v45.6H45z M60.2,118.4V72.8h7.6v45.6H60.2z
        M75.4,118.4V72.8H83v45.6H75.4z M90.6,118.4V95.6H96v22.8H90.6z M100.3,118.4V95.6h5.4v22.8H100.3z"/>
      </svg>
    case "grade":
      return <svg fill={color} width={width} height={height} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 454.611 454.611">
        <g id="XMLID_230_">
          <path id="XMLID_231_" d="M422.356,47.185c-51.29-21.425-102.58,13.336-153.871-18.944v-7.233c0-5.523-4.478-10-10-10
         s-10,4.477-10,10v149.337l20,10.715v-76.425c50.677,10.075,101.353-45.298,152.029-47.26c2.486-0.096,4.572-1.907,5.014-4.355
         C425.972,50.571,424.652,48.144,422.356,47.185z"/>
          <circle id="XMLID_1082_" cx="120.946" cy="37.417" r="37.417" />
          <path id="XMLID_1083_" d="M268.485,383.432V251.345c-6.519,1.881-13.313,1.941-20,0.006v132.655
         c-14.948,3.938-22.894,16.795-43.556,26.663c0.188-1.149,0.291-2.327,0.291-3.53v-91.333c0-3.849-1.025-7.629-2.972-10.95
         l-33.685-57.508c0-4.504,0-93.575,0-118.304c0-2.09,1.694-3.784,3.784-3.784c2.09,0,3.784,1.694,3.784,3.784
         c0,0.14-0.004,0.284-0.011,0.431c0.207,33.203,0.124,19.815,0.331,53.026c0.041,6.615,3.697,12.677,9.528,15.801l63.979,34.276
         c8.789,4.709,19.731,1.4,24.439-7.388c4.709-8.79,1.4-19.731-7.389-24.44l-54.519-29.208c-0.062-9.897-0.125-20.046-0.264-42.271
         c-0.118-23.44-19.284-42.51-42.725-42.51l-18.119,0l-22.81,60.084l5.417-25.519c0.375-1.766,0.103-3.609-0.767-5.191l-7.34-13.35
         l6.513-12.091c0.452-0.822,0.437-1.822-0.041-2.63c-0.478-0.808-1.346-1.303-2.285-1.303h-17.893c-0.938,0-1.807,0.495-2.285,1.303
         c-0.478,0.808-0.493,1.808-0.041,2.63l6.526,12.116l-7.354,13.374c-0.854,1.552-1.132,3.356-0.787,5.094l4.693,25.567
         L90.507,86.762H72.388c-23.439,0-42.605,19.07-42.724,42.51l-0.667,132.635c-0.05,9.971,7.992,18.094,17.963,18.145
         c0.031,0,0.062,0,0.093,0c9.928,0,18.002-8.023,18.052-17.963l0.667-132.635c0.01-1.975,1.617-3.569,3.591-3.564
         s3.572,1.607,3.572,3.582l0.008,303.475c0,11.965,9.7,21.665,21.665,21.665s21.665-9.699,21.665-21.665V259.778h9.354
         l36.263,61.907v85.455c0,6.163,2.578,11.721,6.709,15.666c-17.426,6.823-26.205,15.933-30.513,22.448
         c-1.076,1.628-1.171,3.716-0.246,5.435c0.925,1.719,2.719,2.785,4.671,2.785h232.147c2.173,0,4.126-1.326,4.927-3.346
         c0.801-2.02,0.289-4.325-1.294-5.814C359.421,426.556,314.408,388.733,268.485,383.432z"/>
        </g>
      </svg>
    case "computer":
      return <svg width={width} height={height} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <title>computer-code</title>
        <g id="Layer_2" data-name="Layer 2">
          <g id="invisible_box" data-name="invisible box">
            <rect width="48" height="48" fill={color} />
            <rect width="48" height="48" fill={color} />
            <rect width="48" height="48" fill={color} />
          </g>
          <g id="icons_Q2" data-name="icons Q2">
            <g>
              <path d="M7,34H41a2,2,0,0,0,2-2V8a2,2,0,0,0-2-2H7A2,2,0,0,0,5,8V32A2,2,0,0,0,7,34ZM39,10V30H9V10" />
              <path d="M44,38H4a2,2,0,0,0,0,4H44a2,2,0,0,0,0-4Z" />
              <path d="M29.5,12.6a2.1,2.1,0,0,0-2.7-.2,1.9,1.9,0,0,0-.2,3L31.2,20l-4.6,4.6a1.9,1.9,0,0,0,.2,3,2.1,2.1,0,0,0,2.7-.2l5.9-6a1.9,1.9,0,0,0,0-2.8Z" />
              <path d="M21.2,12.4a2.1,2.1,0,0,0-2.7.2l-5.9,6a1.9,1.9,0,0,0,0,2.8l5.9,6a2.1,2.1,0,0,0,2.7.2,1.9,1.9,0,0,0,.2-3L16.8,20l4.6-4.6A1.9,1.9,0,0,0,21.2,12.4Z" />
            </g>
          </g>
        </g>
      </svg>
    case "educations":
      return <svg fill={color} width={width} height={height} viewBox="0 0 14 14" role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="m 12.499079,12.25525 c 0.0968,0 0.188377,-0.0436 0.249339,-0.11884 0.06096,-0.0752 0.08473,-0.17385 0.06473,-0.26853 l -0.202146,-0.95662 c 0.115125,-0.11137 0.187491,-0.26686 0.187491,-0.43975 0,-0.182 -0.08106,-0.34343 -0.206876,-0.45558 l 0,-3.32202 -0.810333,0.50146 0,2.82056 c -0.125815,0.11215 -0.2069,0.27358 -0.2069,0.45558 0,0.17291 0.07239,0.32841 0.187515,0.43975 l -0.20217,0.95662 c -0.02,0.0947 0.0038,0.19335 0.06473,0.26853 0.06096,0.0752 0.152539,0.11884 0.249339,0.11884 l 0.625281,0 z M 12.773741,4.75539 7.5021019,1.49209 C 7.3477151,1.39699 7.1736728,1.34925 6.9996305,1.34925 c -0.1740423,0 -0.3482077,0.0477 -0.5016586,0.14284 l -5.271713,3.2633 C 1.0854931,4.84249 0.99999905,4.99633 0.99999905,5.1619 c 0,0.1656 0.085494,0.31949 0.22625985,0.40673 l 5.2716883,3.26333 c 0.153451,0.0952 0.3276163,0.14284 0.5016586,0.14284 0.1740423,0 0.3481092,-0.0477 0.5024714,-0.14284 L 12.773741,5.56863 c 0.140766,-0.0872 0.22626,-0.24113 0.22626,-0.40673 0,-0.16557 -0.08549,-0.31946 -0.22626,-0.40651 z M 6.9996059,9.78508 c -0.3283798,0 -0.6488777,-0.0912 -0.928242,-0.26411 l -3.0750017,-1.90368 0,3.27796 c 0,0.97016 1.7931578,1.7555 4.0032436,1.7555 2.2108742,0 4.0038842,-0.78536 4.0038842,-1.7555 l 0,-3.27796 -3.0748786,1.90368 C 7.6492472,9.69388 7.3279857,9.78508 6.9996059,9.78508 Z" /></svg>


    default:
      break;
  }
}