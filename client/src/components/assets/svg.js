
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
        <path d="M10 12V17" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 12V17" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4 7H20" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      case "edit":
        return <svg  width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3.99997H6C4.89543 3.99997 4 4.8954 4 5.99997V18C4 19.1045 4.89543 20 6 20H18C19.1046 20 20 19.1045 20 18V12M18.4142 8.41417L19.5 7.32842C20.281 6.54737 20.281 5.28104 19.5 4.5C18.7189 3.71895 17.4526 3.71895 16.6715 4.50001L15.5858 5.58575M18.4142 8.41417L12.3779 14.4505C12.0987 14.7297 11.7431 14.9201 11.356 14.9975L8.41422 15.5858L9.00257 12.6441C9.08001 12.2569 9.27032 11.9013 9.54951 11.6221L15.5858 5.58575M18.4142 8.41417L15.5858 5.58575" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      case "add":
        return <svg  width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 6C3 4.34315 4.34315 3 6 3H14C15.6569 3 17 4.34315 17 6V14C17 15.6569 15.6569 17 14 17H6C4.34315 17 3 15.6569 3 14V6Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21 7V18C21 19.6569 19.6569 21 18 21H7" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 10V7M10 10V13M10 10H13M10 10H7" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      case "add_position":
        return <svg fill={color} width={width} height={height} viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <title>badge</title>
        <path d="M25.307 12.195c-0.248 0-0.477-0.064-0.688-0.164l-2.271 3.935 2.286 3.961c0.188-0.076 0.391-0.122 0.605-0.122 0.9 0 1.63 0.729 1.63 1.63s-0.729 1.631-1.63 1.631c-0.901 0-1.631-0.668-1.631-1.568 0-0.015 0.009-0.041 0.009-0.041h-4.404l-2.373 4.050c0.465 0.287 0.791 0.777 0.791 1.363 0 0.9-0.73 1.631-1.631 1.631s-1.63-0.73-1.63-1.631c0-0.629 0.367-1.157 0.888-1.43l-2.335-3.983h-4.608c0 0.015 0.008 0.026 0.008 0.041 0 0.9-0.73 1.568-1.63 1.568s-1.63-0.73-1.63-1.631 0.73-1.63 1.63-1.63c0.278 0 0.528 0.088 0.758 0.211l2.338-4.050-2.31-4c-0.236 0.133-0.495 0.229-0.786 0.229-0.9 0-1.63-0.729-1.63-1.63s0.73-1.631 1.63-1.631c0.891 0 1.609 0.716 1.625 1.604h4.604l2.307-3.997c-0.504-0.276-0.86-0.794-0.86-1.41 0.001-0.902 0.731-1.631 1.631-1.631s1.631 0.729 1.631 1.631c0 0.573-0.314 1.054-0.764 1.345l2.346 4.062h4.469c0.016-0.888 0.734-1.604 1.625-1.604 0.9 0 1.631 0.73 1.631 1.631s-0.731 1.63-1.631 1.63zM16 11.584c-2.401 0-4.348 1.946-4.348 4.348s1.947 4.348 4.348 4.348c2.4 0 4.348-1.947 4.348-4.349s-1.948-4.347-4.348-4.347zM16 19.396c-1.914 0-3.465-1.551-3.465-3.465 0-1.913 1.551-3.464 3.465-3.464 1.913 0 3.465 1.551 3.465 3.464 0 1.915-1.552 3.465-3.465 3.465z"></path>
        </svg>
        case "information":
          return <svg width={width} height={height} viewBox="0 0 24 24" id="information-circle" data-name="Flat Color" xmlns="http://www.w3.org/2000/svg" class="icon flat-color"><circle id="primary" cx="12" cy="12" r="10" fill={color}></circle><path id="secondary" d="M12,17a1,1,0,0,1-1-1V12a1,1,0,0,1,2,0v4A1,1,0,0,1,12,17ZM12,6.5A1.5,1.5,0,1,0,13.5,8,1.5,1.5,0,0,0,12,6.5Z" fill="yellow"></path></svg>

        
    default:
      break;
  }
}