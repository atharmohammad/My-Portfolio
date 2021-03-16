import { Component } from "react";

class OurReactComponent extends Component {
  //attach our function to document event listener on scrolling whole doc
  componentDidMount() {
    document.addEventListener("scroll", this.isInViewport);
  }

  //do not forget to remove it after destroyed
  componentWillUnmount() {
    document.removeEventListener("scroll", this.isInViewport);
  }

  //our function which is called anytime document is scrolling (on scrolling)
  isInViewport = () => {
    //get how much pixels left to scrolling our ReactElement
    const top = this.viewElement.getBoundingClientRect().top;

    //here we check if element top reference is on the top of viewport
    /*
     * If the value is positive then top of element is below the top of viewport
     * If the value is zero then top of element is on the top of viewport
     * If the value is negative then top of element is above the top of viewport
     * */

    this.props.setElementStatus(top <= 0);
  };

  render() {
    // set reference to our scrolling element
    let setRef = (el) => {
      this.viewElement = el;
    };
    return (
      // add setting function to ref attribute the element which we want to check
      <section className="ourReactElement" ref={setRef}></section>
    );
  }
}

export default OurReactComponent;
