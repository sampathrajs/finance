import { postAxios } from '../../../api';
import { GET_ALL_CUSTOMERS } from '../../selectors/customer';

export const getCustomers = async (dispatch) => {
  const data = [
    {
      id: 'FF01000001::customer',
      type: 'customer',
      customerNo: 'FF01000001',
      personalInfo: {
        firstName: 'Vivek',
        lastName: 'S',
        gender: 'Male',
        dateOfBirth: null,
        fatherName: 'Subramani K',
        motherName: 'Kamala S',
        spouseName: 'Vino N',
        address: {
          building: 'F1 Ruby Apts',
          street: 'Yamuna St, Balaji Nagar, Irumbuliyur East',
          city: 'Chennai',
          state: 'Tamil Nadu',
          pincode: 600059,
        },
        email: 'vivek.s@gmail.com',
        mobileNo: '9458765987',
        phoneNo: null,
        occupation: 'Engineer',
        palceOfWork: null,
        monthlyIncome: 2000,
      },
    },
    {
      id: 'FF01000003::customer',
      type: 'customer',
      customerNo: 'FF01000003',
      personalInfo: {
        firstName: 'Vimala',
        lastName: 'N',
        gender: 'Female',
        dateOfBirth: null,
        fatherName: 'Natarajan S',
        motherName: 'Vanitha V',
        spouseName: 'Kamal P',
        address: {
          building: 'F2 Ruby Apts',
          street: 'Yamuna St, Balaji Nagar, Irumbuliyur East',
          city: 'Chennai',
          state: 'Tamil Nadu',
          pincode: 600059,
        },
        email: 'vimala.kamal@gmail.com',
        mobileNo: '9568745968',
        phoneNo: null,
        occupation: 'Home Maker',
        palceOfWork: null,
        monthlyIncome: 200000,
      },
    },
  ];
  return await postAxios('/customer/all', {})
    .then((resp) => {
      dispatch({
        type: GET_ALL_CUSTOMERS,
        payload: data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ALL_CUSTOMERS,
        payload: data,
      });
      console.log('error', err);
    });
};
