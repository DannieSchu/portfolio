import { Events, scroller } from 'react-scroll';

export const useGetScroll = () => {
  const scrollTo = element => {
    scroller.scrollTo(element, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  };

  const scrollToWithContainer = (element, container) => {
    let goToContainer = new Promise(resolve => {
      Events.scrollEvent.register('end', () => {
        resolve();
        Events.scrollEvent.remove('end');
      });
      scroller.scrollTo(container, {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
      });
    });

    goToContainer.then(() =>
      scroller.scrollTo(element, {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
        containerId: container
      }));
  };

  return { scrollTo, scrollToWithContainer };
};
