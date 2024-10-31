import React from 'react';  

const FollowingIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (  
  <svg  
    xmlns="http://www.w3.org/2000/svg"  
    viewBox="0 0 25 24"  
    fill="currentColor"  
    width="25"  
    height="24"  
    {...props} // Allows passing additional properties like className, style, etc.  
  >  
    <g clipPath="url(#clip0_53_162)">  
      <path  
        d="M14.5 14.252V16.342C13.5949 16.022 12.6263 15.9239 11.6754 16.0558C10.7245 16.1877 9.8192 16.5459 9.03543 17.1002C8.25166 17.6545 7.61234 18.3888 7.17116 19.2414C6.72998 20.094 6.49982 21.04 6.5 22L4.5 21.999C4.49969 20.7779 4.77892 19.5729 5.3163 18.4764C5.85368 17.3799 6.63494 16.4209 7.60022 15.673C8.5655 14.9251 9.68918 14.4081 10.8852 14.1616C12.0811 13.9152 13.3177 13.9467 14.5 14.252ZM12.5 13C9.185 13 6.5 10.315 6.5 7C6.5 3.685 9.185 1 12.5 1C15.815 1 18.5 3.685 18.5 7C18.5 10.315 15.815 13 12.5 13ZM12.5 11C14.71 11 16.5 9.21 16.5 7C16.5 4.79 14.71 3 12.5 3C10.29 3 8.5 4.79 8.5 7C8.5 9.21 10.29 11 12.5 11ZM18.293 19.914L21.828 16.379L23.243 17.793L18.293 22.743L14.757 19.207L16.172 17.793L18.293 19.914Z"  
        fill="currentColor"  
      />  
    </g>  
    <defs>  
      <clipPath id="clip0_53_162">  
        <rect width="24" height="24" fill="currentColor" transform="translate(0.5)" />  
      </clipPath>  
    </defs>  
  </svg>  
);  

export default FollowingIcon;