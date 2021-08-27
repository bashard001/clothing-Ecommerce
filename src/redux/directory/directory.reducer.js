const INITIAL_STATE =
{ sections: [
  
    {
      title: 'womens',
      bg: "women",
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      size: 'large',
      id: 4,
      linkUrl: 'shop/womens'
    },
    {
      title: 'mens',
      bg: "men",
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      size: 'large',
      id: 5,
      linkUrl: 'shop/mens'
    },
    
    {
      title: 'Shoes',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      id: 3,
      linkUrl: 'shop/sneakers',
      bg: "sneaker"
    },
    {
      title: 'hats',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      id: 1,
      linkUrl: 'shop/hats',
      bg: 'cap',
    },
    {
      title: 'Tops',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      id: 2,
      linkUrl: 'shop/jackets'
    }
  ]}

  const directoryReducer = (state = INITIAL_STATE, action) => {
      switch (action.type) {
        
          default:
              return state;
      }
  }

  export default directoryReducer