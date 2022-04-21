import { Container, Button } from 'react-bootstrap';
import { CarInfo } from './CarInfo';
import { Attibutes } from './Attributes';
import { Images } from './Images';

import styled from './styles.module.scss';
import { ProductPolicies } from './ProductPolicies';
import { useForm, Controller } from 'react-hook-form';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';

export function Admin() {

  const [attributes, setAttributes] = useState([]);
  const [images, setImages] = useState([]);
  
  const schema = yup.object({
    name_vehicle: yup.string().required("Campo obrigatório."),
    category: yup.string().required("Campo obrigatório."),
    address: yup.string().required("Campo obrigatório."),
    description: yup.string().required("Campo obrigatório."),
    city: yup.string().required("Campo obrigatório."),
    car_rules: yup.string().required("Campo obrigatório."),
    cancel: yup.string().required("Campo obrigatório."),
    security: yup.string().required("Campo obrigatório."),
  });

  const { handleSubmit, register, formState: { errors }, control } = useForm({
    resolver: yupResolver(schema),
  });

  function handleSubmitForm(data) {
    console.log("DATA", data);
    console.log("IMAGES", images);
    console.log("attributes", attributes);
  }

  return (
    <Container as="section" fluid className={`${styled.red} m-0 mb-5`}>
      <Container fluid className={`pb-2 pt-4 px-0 m-0 mx-auto max-width-1180`}>
        <h2 className="fs-4 font-600">Criar Veículo</h2>
      </Container>
      <Container fluid className={`py-3 m-0 mx-auto max-width-1180 rounded ${styled.container}`}>
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <CarInfo Controller={Controller} control={control} register={register} errors={errors}/>
          <Attibutes setAttributes={setAttributes} attributes={attributes}/>
          <ProductPolicies register={register} errors={errors}/>
          <Images images={images} setImages={setImages}/>
          <div className='d-flex justify-content-center align-items-center mt-5 mb-3'>
            <Button type='submit' className={`w-100 ${styled.max_width} text-white font-600`}>Criar</Button>
          </div>
        </form>
      </Container>
    </Container>
  )
}