import './FooterTwo.css'
import { useScrollObserver } from '../Context/useScrollObserver'
import { useRef } from 'react';
export default function FooterTwo(){
    
      const footerRef = useRef(null);
      const sectionRef = useScrollObserver("footer");
      
  const setRefs = (el) => {
    footerRef.current = el;
    sectionRef.current = el;
  };

    return(
        <>
        <div className="card1" 
        data-scroll-section
        data-scroll
        data-scroll-call="footerEnter"
        data-scroll-repeat="true"
        data-scroll-id="footer-section"
        ref={setRefs}
        data-scroll-class="in-view">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus dignissimos, incidunt perferendis quis laboriosam vero nemo officiis alias asperiores explicabo nobis at expedita cum velit tempore necessitatibus enim fugit distinctio?
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim fugit, sunt nesciunt, ducimus quo earum, assumenda facere laborum voluptatem cumque possimus ipsa neque reiciendis dicta? Minus corporis accusamus mollitia autem.
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, cupiditate delectus inventore incidunt ipsa, dolorum voluptate expedita tempora repellat eum soluta nihil vel minus voluptas sapiente? Sed vitae deleniti distinctio?
</div>
        </>
    )
}