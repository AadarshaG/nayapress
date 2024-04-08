import {useState} from 'react';
import * as Yup from 'yup';


const useDisabilitySubmit = (id) => {
    const [imageUrl, setImageUrl] = useState('');


    const initialValues = {
        idNumber: '',
        date: '',
        fullNameNep: '',
        fullNameEng: '',
        gender: '',
        maritialStatus: '',
        educationalStatus: '',
        employmentStatus: '',
        birthDate: '',
        age: '',
        bloodGroup: '',
        citizenShipNumb: '',
        citizenShipIssuedDistrict: '',
        citizenShipIssuedDate: '',
        contactNumb: '',
        tempAddress: {
            province: '',
            district: '',
            localLevel: '',
            wardNo: '',
            areaName: ''
        },
        isTempAndPermAddressSame: false,
        permAddress: {
            province: '',
            district: '',
            localLevel: '',
            wardNo: '',
            areaName: ''
        },
        parentFullNameNep: '',
        applicantAddress: '',
        applicantName: '',
        applicantRelation: '',
        parentFullNameEng: '',
        parentContactNumber: '',
        disabilityType: '',
        disabilityTypeByType: '',
        deformityDetail: '',
        obstacleDueToDeformity: '',
        disabilityReason: '',
        assistantEquipment: '',
        requiredEquipment: '',
        assistantEquipmentUsage: '',
        usedEquipName: '',
        dailyRoutineWOHelp: '',
        dailyRoutineWHelp: '',
        trainingName: '',
        trainingDescription: ''
    }

    const DisabilityFormSchema = Yup.object().shape({
        fullNameNep: Yup.string().required('Required!'),
        fullNameEng: Yup.string().required('Required!'),
        gender: Yup.string().required('Required!'),
        age: Yup.number().required('Required!'),
        citizenShipNumb: Yup.string().required('Required!'),
        tempAddress: Yup.object().shape({
            province: Yup.string().required('Required!'),
            district: Yup.string().required('Required!'),
            localLevel: Yup.string().required('Required!'),
            wardNo: Yup.string().required('Required!'),
            areaName: Yup.string().required('Required!')
        }),
        permAddress: Yup.object().shape({
            province: Yup.string().required('Required!'),
            district: Yup.string().required('Required!'),
            localLevel: Yup.string().required('Required!'),
            wardNo: Yup.string().required('Required!'),
            areaName: Yup.string().required('Required!')
        }),
        parentFullNameNep: Yup.string().required('Required!'),
        applicantRelation: Yup.string().required('Required!'),
        parentFullNameEng: Yup.string().required('Required!'),
        disabilityType: Yup.string().required('Required!'),
        disabilityTypeByType: Yup.string().required('Required!'),
        disabilityReason: Yup.string().required('Required!'),
    });


    const onSubmit = (data) => {
        // if (!imageUrl) {
        //     notifyError('Image is required!');
        //     return;
        // }
        // if (data.originalPrice < data.salePrice) {
        //     notifyError('SalePrice must be less then or equal of product price!');
        //     return;
        // }

        // if (id) {
        //     ProductServices.updateProduct(id, disabilityFormData)
        //         .then((res) => {
        //
        //             notifySuccess(res.message);
        //         })
        //         .catch((err) => notifyError(err.message));
        //
        // } else {
        //     ProductServices.addProduct(disabilityFormData)
        //         .then((res) => {
        //             notifySuccess(res.message);
        //         })
        //         .catch((err) => notifyError(err.message));
        //
        // }
    };


    return {
        onSubmit,
        imageUrl,
        setImageUrl,
        initialValues,
        DisabilityFormSchema
    };

};

export default useDisabilitySubmit;
