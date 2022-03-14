import React, { useState } from "react";
import Nav from "../../components/Nav/Nav";
import Title from "../../components/Text/Title";

import { Container, Content, Form } from "./Onboarding.styles";
import { Input, Textarea, RadioGroup, Radio } from "../../components/UI/Forms";
import { Grid } from "../../components/UI/Grid/Grid";
import { Label } from "../../components/UI/Forms/Input.styles";
import Buttons from "../../components/UI/Buttons/Buttons";

export const Onboarding = () => {
  const [formValues, setFormValues] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <>
      <Container>
        <Nav style={{ position: "initial" }} />
        <Content>
          <Title variant="h3"><i>Create Account</i></Title>

          <Form onSubmit={handleSubmit}>
            <Grid cols={1}>
              <Input
                id="first_name"
                label="First Name"
                htmlFor="first_name"
                type="text"
                name="first_name"
                placeholder="first name"
                required={true}
                onChange={handleChange}
              />
            </Grid>

            <Grid rows={1} gap={0}>
              <Label>Birthday</Label>
              <Grid cols={3} gap={"16px"}>
                <Input
                  id="dob_day"
                  label=""
                  htmlFor="dob_day"
                  type="number"
                  name="dob_day"
                  placeholder="DD"
                  required={true}
                  onChange={handleChange}
                />

                <Input
                  id="dob_month"
                  label=""
                  htmlFor="dob_month"
                  type="number"
                  name="dob_month"
                  placeholder="MM"
                  required={true}
                  onChange={handleChange}
                />

                <Input
                  id="dob_year"
                  label=""
                  htmlFor="dob_year"
                  type="number"
                  name="dob_year"
                  placeholder="YYYY"
                  required={true}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>

            <Grid cols={2}>
              <RadioGroup
                name="gender_identity"
                checked="male"
                label="Gender"
                cols={2}
              >
                <Radio
                  value={"male"}
                  htmlFor="gender_male"
                  id="gender_male"
                  label="Male"
                  onChange={handleChange}
                />
                <Radio
                  value={"female"}
                  htmlFor="gender_female"
                  id="gender_female"
                  label="Female"
                  onChange={handleChange}
                />
              </RadioGroup>
            </Grid>

            <Grid cols={2}>
              <RadioGroup
                name="gender_preference"
                label="Show me"
                cols={2}
              >
                <Radio
                  value={"man"}
                  htmlFor="gender_preference_male"
                  id="gender_preference_male"
                  label="Man"
                  onChange={handleChange}
                />
                <Radio
                  value={"woman"}
                  htmlFor="gender_preference_female"
                  id="gender_preference_female"
                  label="Woman"
                  onChange={handleChange}
                />
              </RadioGroup>
            </Grid>

            <Grid cols={2}>
              <Radio
                type="checkbox"
                value={"show_gender"}
                name="show_gender"
                htmlFor="show_gender"
                id="show_gender"
                label="Show gender on my profile"
                onChange={handleChange}
              />
            </Grid>

            <Textarea
              label="About you"
              htmlFor="about-you"
              id="about-you"
              placeholder="Ex: I like long walks, dance and draw"
              onChange={handleChange}
            />

            <Grid cols={"1px"}>
              <Input
                type="url"
                name="url"
                id="url"
                label="Profile pic"
                required={true}
                onChange={handleChange}
              />
            </Grid>

            <Grid cols={"1px"}>
              <Buttons>Send</Buttons>
            </Grid>
          </Form>
        </Content>
      </Container>
    </>
  );
};

export default Onboarding;
