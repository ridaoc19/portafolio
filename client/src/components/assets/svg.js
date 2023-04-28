
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
        <path d="M10 12V17" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M14 12V17" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M4 7H20" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      case "edit":
        return <svg  width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3.99997H6C4.89543 3.99997 4 4.8954 4 5.99997V18C4 19.1045 4.89543 20 6 20H18C19.1046 20 20 19.1045 20 18V12M18.4142 8.41417L19.5 7.32842C20.281 6.54737 20.281 5.28104 19.5 4.5C18.7189 3.71895 17.4526 3.71895 16.6715 4.50001L15.5858 5.58575M18.4142 8.41417L12.3779 14.4505C12.0987 14.7297 11.7431 14.9201 11.356 14.9975L8.41422 15.5858L9.00257 12.6441C9.08001 12.2569 9.27032 11.9013 9.54951 11.6221L15.5858 5.58575M18.4142 8.41417L15.5858 5.58575" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      case "add":
        return <svg  width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 6C3 4.34315 4.34315 3 6 3H14C15.6569 3 17 4.34315 17 6V14C17 15.6569 15.6569 17 14 17H6C4.34315 17 3 15.6569 3 14V6Z" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M21 7V18C21 19.6569 19.6569 21 18 21H7" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10 10V7M10 10V13M10 10H13M10 10H7" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      case "add_position":
        return
    default:
      break;
  }
}