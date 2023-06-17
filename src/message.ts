function getEvacuationMessage(suggestions: any):any {
    return {
        type: "text",
        text: `You can go to :
[1] ${suggestions[0]}
[2] ${suggestions[1]}
[3] ${suggestions[2]}`
    };
}

function getDangerousAreaMessage(dangerous_areas: any):any {
    return {
        type: "text",
        text: `You are in a dangerous area! Please avoid the following areas: ${dangerous_areas.join(', ')}
安安，您在哪裡附近呢?:
1. metro-entry-1
2. metro-entry-2
3. bus-station-1
4. bus-station-2`
      };
}

// choose_place_id is the id of the place that user choose
function getChoosePlaceMap(choose_place_id: any):any {
    const column1: BubbleContainer = {
    type: 'bubble',
    direction: 'ltr',
    hero: {
      type: 'image',
      url: 'https://github.com/ryankert01/flow-control-line-bot/tree/main/map_pics/${user_place}-${choose_place_id}.png',
      size: 'full',
      aspectRatio: '20:13',
      aspectMode: 'cover',
      action: {
        type: 'uri',
        uri: 'https://www.google.com/maps/dir/?api=1&origin=%E7%9B%AE%E5%89%8D%E6%89%80%E5%9C%A8%E4%BD%8D%E7%BD%AE&destination=${suggestions[0]}',
        label: 'View',
      },
    },
    body: {
      type: 'box',
      layout: 'vertical',
      contents: [
        {
          type: 'text',
          text: 'Suggestion 1 :  ${suggestions[0]}',
          weight: 'bold',
          size: 'xl',
        },
        {
          type: 'text',
          text: '${suggestions[0]}',
          wrap: true,
        },
        {
          type: 'button',
          action: {
            type: 'uri',
            uri: 'https://www.google.com/maps/dir/?api=1&origin=%E7%9B%AE%E5%89%8D%E6%89%80%E5%9C%A8%E4%BD%8D%E7%BD%AE&destination=${suggestions[0]}',
            label: 'Go to Map',
          },
        },
      ],
    },
  };

  
  const column2: BubbleContainer = {
    type: 'bubble',
    direction: 'ltr',
    hero: {
      type: 'image',
      url: 'https://github.com/ryankert01/flow-control-line-bot/tree/main/map_pics/${user_place}-${choose_place_id}.png',
      size: 'full',
      aspectRatio: '20:13',
      aspectMode: 'cover',
      action: {
        type: 'uri',
        uri: 'https://www.google.com/maps/dir/?api=1&origin=%E7%9B%AE%E5%89%8D%E6%89%80%E5%9C%A8%E4%BD%8D%E7%BD%AE&destination=${suggestions[1]}',
        label: 'View',
      },
    },
    body: {
      type: 'box',
      layout: 'vertical',
      contents: [
        {
          type: 'text',
          text: 'Suggestion 2 :  ${suggestions[1]}',
          weight: 'bold',
          size: 'xl',
        },
        {
          type: 'text',
          text: '',
          wrap: true,
        },
        {
          type: 'button',
          action: {
            type: 'uri',
            uri: 'https://www.google.com/maps/dir/?api=1&origin=%E7%9B%AE%E5%89%8D%E6%89%80%E5%9C%A8%E4%BD%8D%E7%BD%AE&destination=${suggestions[1]}',
            label: 'Go to Map',
          },
        },
      ],
    },
  };

  const column3: BubbleContainer = {
    type: 'bubble',
    direction: 'ltr',
    hero: {
      type: 'image',
      url: 'https://github.com/ryankert01/flow-control-line-bot/tree/main/map_pics/${user_place}-${choose_place_id}.png',
      size: 'full',
      aspectRatio: '20:13',
      aspectMode: 'cover',
      action: {
        type: 'uri',
        uri: 'https://www.google.com/maps/dir/?api=1&origin=%E7%9B%AE%E5%89%8D%E6%89%80%E5%9C%A8%E4%BD%8D%E7%BD%AE&destination=${suggestions[2]}',
        label: 'View',
      },
    },
    body: {
      type: 'box',
      layout: 'vertical',
      contents: [
        {
          type: 'text',
          text: 'Suggestion 3 :  ${suggestions[0]}',
          weight: 'bold',
          size: 'xl',
        },
        {
          type: 'text',
          text: '',
          wrap: true,
        },
        {
          type: 'button',
          action: {
            type: 'uri',
            uri: 'https://www.google.com/maps/dir/?api=1&origin=%E7%9B%AE%E5%89%8D%E6%89%80%E5%9C%A8%E4%BD%8D%E7%BD%AE&destination=${suggestions[2]}',
            label: 'Go to Map',
          },
        },
      ],
    },
  };

  // 創建 Carousel 容器
  const carouselContainer: CarouselContainer = {
    type: 'carousel',
    contents: [column1, column2, column3],
    direction: 'ltr',
  };

  // 創建 Flex Message
  const flexMessage: FlexSendMessage = {
    type: 'flex',
    altText: 'Carousel Message',
    contents: carouselContainer,
  };

  return flexMessage;
}



export { getEvacuationMessage, getDangerousAreaMessage, getChoosePlaceMap };
