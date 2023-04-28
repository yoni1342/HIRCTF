import React,{useState} from 'react'
import VisibilitySensor from "react-visibility-sensor";
import AnimatedNumber from "./components/AnimateCount";

export default function Index() {
  const [visible, setVisible] = useState(false);
  
  const onSectionVisible = (isVisible: boolean) => {
    if (isVisible) {
      setVisible(true);
    }
  };
  return (
    <VisibilitySensor onChange={onSectionVisible} partialVisibility>
      <div className='grid grid-cols-4 bg-gray-100 dark:bg-secondary lg:p-10 md:p-7 sm:p-5 p-3'>
        <div>
          {visible && <AnimatedNumber number={42} title='Project'/>}
        </div>
        <div>
          {visible && <AnimatedNumber number={12} title='Certificate'/>}
        </div>
        <div>
          {visible && <AnimatedNumber number={100} title='Team Members'/>}
        </div>
        <div>
          {visible && <AnimatedNumber number={100} title='Clients'/>}
        </div>
      </div>
    </VisibilitySensor>
  )
}
