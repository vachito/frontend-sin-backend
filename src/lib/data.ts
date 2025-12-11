interface Payment {
  id: string
  amount: number
  status: 'pending' | 'processing' | 'success' | 'failed'
  email: string
}

export const payments: Payment[] = [
  {
    id: '728ed52f',
    amount: 100,
    status: 'pending',
    email: 'example0@example.com',
  },
  {
    id: '489e1d42',
    amount: 125,
    status: 'processing',
    email: 'example1@gmail.com',
  },
  {
    id: '489e1d52',
    amount: 150,
    status: 'success',
    email: 'example2@gmail.com',
  },
  {
    id: '489e1zaa',
    amount: 160,
    status: 'processing',
    email: 'example3@gmail.com',
  },
  {
    id: '728ed5ab',
    amount: 170,
    status: 'pending',
    email: 'example4@example.com',
  },
  {
    id: '489e1dac',
    amount: 180,
    status: 'processing',
    email: 'example5@gmail.com',
  },
  {
    id: '489e1dad',
    amount: 190,
    status: 'success',
    email: 'example6@gmail.com',
  },
  {
    id: '489e1zae',
    amount: 200,
    status: 'processing',
    email: 'example7@gmail.com',
  },
  {
    id: '728ed5af',
    amount: 210,
    status: 'pending',
    email: 'example8@example.com',
  },
  {
    id: '489e1dag',
    amount: 220,
    status: 'success',
    email: 'example9@gmail.com',
  },
  {
    id: '489e1dah',
    amount: 230,
    status: 'failed',
    email: 'example10@gmail.com',
  },
  {
    id: '489e1zai',
    amount: 240,
    status: 'processing',
    email: 'example11@gmail.com',
  },
  {
    id: '728ed5aj',
    amount: 250,
    status: 'pending',
    email: 'example12@example.com',
  },
  {
    id: '489e1dak',
    amount: 260,
    status: 'success',
    email: 'example13@gmail.com',
  },
  {
    id: '489e1dal',
    amount: 270,
    status: 'processing',
    email: 'example14@gmail.com',
  },
  {
    id: '489e1zam',
    amount: 300,
    status: 'success',
    email: 'example15@gmail.com',
  },
  {
    id: '728ed5an',
    amount: 500,
    status: 'pending',
    email: 'example16@example.com',
  },
  {
    id: '489e1dao',
    amount: 425,
    status: 'processing',
    email: 'example17@gmail.com',
  },
  {
    id: '489e1dap',
    amount: 55,
    status: 'failed',
    email: 'example18@gmail.com',
  },
  {
    id: '489e1zaq',
    amount: 160,
    status: 'success',
    email: 'example19@gmail.com',
  },
  {
    id: '489e1dar',
    amount: 125,
    status: 'processing',
    email: 'example20@gmail.com',
  },
  {
    id: '489e1das',
    amount: 150,
    status: 'failed',
    email: 'example21@gmail.com',
  },
  {
    id: '489e1zas',
    amount: 160,
    status: 'processing',
    email: 'example22@gmail.com',
  },
  {
    id: '728ed5at',
    amount: 100,
    status: 'pending',
    email: 'example23@example.com',
  },
  {
    id: '489e1dat',
    amount: 125,
    status: 'processing',
    email: 'example24@gmail.com',
  },
  {
    id: '489e1dau',
    amount: 150,
    status: 'processing',
    email: 'example25@gmail.com',
  },
  {
    id: '489e1zav',
    amount: 160,
    status: 'failed',
    email: 'example26@gmail.com',
  },
]
