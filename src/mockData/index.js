export const orderSummary = {
  supplier: {
    title: 'Supplier',
    value: 'East coast fruits & vegetables'
  },
  shippingDate: {
    title: 'Shipping date',
    value: 'Thu, Feb 10'
  },
  total: {
    title: 'Total',
    value: '$ 15,028.3'
  },
  category: {
    title: 'Category',
    value: ['fruits', 'meat', 'vegetables'],
    icons: true
  },
  department: {
    title: 'Department',
    value: '300-444-678'
  },
  status: {
    title: 'Status',
    value: 'Awaiting your approvel'
  }
}

export const orderDetails = {
  supplier: 'East coast fruits and vegetables',
  shippingDate: 'Thu, Feb 10',
  cart: [
    {
      name: 'Chicken breast fillets, Boneless marinated 6 Ounce Raw, Invivid',
      brand: 'Hormel black labelmany',
      price: 60.67,
      unit: '6 * 1LB',
      quantity: 0,
      status: [],
      category: 'fruit',
      approved: false,
      missing: false,
      urgent: false,
    },
    {
      name: 'Chicken breast fillets, Boneless marinated 6 Ounce Raw, Invivid',
      brand: 'Hormel black labelmany',
      price: 60.67,
      unit: '6 * 1LB',
      quantity: 15,
      originalQuantity: 12,
      status: [],
      category: 'fruit',
      approved: true,
      missing: false,
      urgent: false,
      reasons: ['Quality is not the same']
    },
    {
      name: 'Chicken breast fillets, Boneless marinated 6 Ounce Raw, Invivid',
      brand: 'Hormel black labelmany',
      price: 60.67,
      unit: '6 * 1LB',
      quantity: 7,
      status: [],
      category: 'meat',
      approved: false,
      missing: false,
      urgent: false,
    },
    {
      name: 'Chicken breast fillets, Boneless marinated 6 Ounce Raw, Invivid',
      brand: 'Hormel black labelmany',
      price: 60.67,
      originalPrice: 54,
      unit: '6 * 1LB',
      quantity: 18,
      status: [],
      category: 'fruit',
      approved: true,
      missing: false,
      urgent: false,
      reasons: ['Price is not the same']
    },

  ],
  department: '323-545-678',
  status: 'Awaiting your approval'
}

export const getCatalog = (value = '') => {
  let arr = new Array(5).fill('1')
  if (!(['fish', 'beef', 'chicken'].includes((value.toString()).toLowerCase()))) {
    return new Promise((resolve, reject) => {
      setTimeout(() => { resolve([]) }, 1000)
    })
  }
  let result = arr.map((key, index) => {
    return {
      uuid : crypto.randomUUID(),
      name: `${value}, Ground free fall, 80% Lean, Fresh ${value}, Ground dish ${index + 1}`,
      brand: 'Hormel black labelmany',
      unit: '6 * 1LB',
      price: Math.floor(Math.random() * (15 - 6 + 1)) + 6,
      quantity: 0,
      reasons : []
    }
  })
  return new Promise((resolve, reject) => {
    setTimeout(() => { resolve(result) }, 1000)
  })
}