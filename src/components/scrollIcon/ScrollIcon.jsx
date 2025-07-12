import './ScrollIcon.css';

export default function ScrollIcon() {
  return (
    <div className="mouse-wrap scroll-icon">
      <div className="mouse">
        <div className="frame">
          <svg
            id="mouse"
            viewBox="0 0 54.9 91"
            width="30"
            height="50"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="st0"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeMiterlimit="10"
              d="M27.4,3.6L27.4,3.6C14.2,3.6,3.5,14.3,3.5,27.5v36c0,13.2,10.7,23.9,23.9,23.9h0
	           c13.2,0,23.9-10.7,23.9-23.9v-36C51.4,14.3,40.7,3.6,27.4,3.6z"
            />
          </svg>
        </div>
        {/* Optional: Add mouse-left and mouse-right if you want */}
      </div>
      <p className='scroll-p'>Scroll</p>
    </div>
  );
}
