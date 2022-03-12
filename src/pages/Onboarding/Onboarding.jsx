import React from "react";
import Nav from "../../components/Nav/Nav";
import Title from "../../components/Text/Title";

import { Container, Content } from "./Onboarding.styles";
import { Input, Textarea, RadioGroup, Radio } from "../../components/UI/Forms";
import { Grid } from "../../components/UI/Grid/Grid";
import { Label } from "../../components/UI/Forms/Input.styles";
export const Onboarding = () => {
  const handleChange = () => {};
  return (
    <>
      <Container>
        <Nav style={{ position: "initial" }} />
        <Content>
          <Title variant="h3">Create Account</Title>

          <form>
            <Grid columns={1}>
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
            <Grid columns={1} gap={0}>
              <Label>Birthday</Label>
              <Grid columns={3} gap={"25px"}>
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
            <Textarea
              label="About you"
              htmlFor="about-you"
              id="about-you"
              placeholder="Describe yourself"
            />

            <Grid>
              <RadioGroup name="gender">
                <Radio
                  value={"male"}
                  htmlFor="gender_male"
                  id="gender_male"
                  label="Male"
                ></Radio>
                <Radio
                  value={"female"}
                  htmlFor="gender_female"
                  id="gender_female"
                  label="Female"
                ></Radio>
              </RadioGroup>
            </Grid>
          </form>
        </Content>
      </Container>
    </>
  );
};

export default Onboarding;
