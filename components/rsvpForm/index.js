import { useEffect, useContext, useState } from 'react';
import useTranslation from '../hooks/useTranslation';
import styled from 'styled-components';
import Button from '../button';
import { LanguageContext } from '../context/LanguageProvider';
import { setLanguageCookie } from '../../utils/language';
import {
  RSVP_SUBMIT,
  RSVP_EMAIL,
  RSVP_FNAME,
  RSVP_LNAME,
  RSVP_MSG,
  RSVP_NO,
  RSVP_YES
} from '../../constants';

const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  @media (min-width: 1024px) {
    flex-direction: column;
    justify-content: space-between;
  } ;
`;

const Input = styled.div`
  flex-direction: column;
  margin-bottom: 40px;
  position: relative;

  > label {
    font-size: 16px;
    text-transform: capitalize;
    color: #666;
  }

  > input,
  > textarea,
  > select {
    font-size: 32px;
    font-family: 'futura-pt';
    background: transparent;
    width: 100%;

    &:focus {
      outline: none;
    }
  }

  > input {
    padding: 10px 0 0 10px;
    line-height: 20px;
    border: none;
    border-bottom: solid 1px #ccc;

    @media (min-width: 1024px) {
      width: calc(100% - 40px);
    }

    &:hover,
    &:focus {
      border-color: ${({ theme }) => theme.colors.accent};
    }
  }

  @media (min-width: 1024px) {
    flex-direction: row;
  } ;
`;

const TextareaInput = styled(Input)`
  display: block;
  margin-top: 20px;
  > p {
    color: #666;
  }
  > textarea {
    width: 100%;
    margin-top: 10px;
    padding: 0;
    border: solid 1px #ccc;
    line-height: 40px;
    resize: none;
    height: 240px;

    &:hover,
    &:focus {
      border-color: ${({ theme }) => theme.colors.accent};
    }
  }
`;

export default function RsvpForm({ onSubmit }) {
  const { t } = useTranslation();
  const [locale] = useContext(LanguageContext);
  useEffect(() => {
    setLanguageCookie(null, locale);
  }, []);
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [email, setEmail] = useState('');
  const [attendance, setAttendance] = useState('');

  const [msg, setMsg] = useState('');

  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    setError('');
    e.preventDefault();

    if (!fName && !lName && !email && !attendance) {
      setError(
        'All fields are required. Please fill out the form and try to submit again, thanks!'
      );
      return;
    }

    if (!fName || !lName || !email || !attendance) {
      setError(
        'First name, last name, email, and RSVP status are required. Please check each field and try to submit again, thanks'
      );

      return;
    }

    const formData = {
      name: `${fName} ${lName}`,
      email,
      rsvp: attendance,
      message: msg
    };

    const success = await onSubmit(formData);

    if (success) setSubmitted(true);
  };

  return submitted === true ? null : (
    <form id="form" onSubmit={handleSubmit}>
      {error}
      <InputsContainer>
        <Inputs>
          <Input>
            <label htmlFor="firstName">{t(RSVP_FNAME.key)}</label>
            <input
              type="text"
              id="firstName"
              value={fName}
              onChange={(e) => setFName(e.target.value)}
            />
          </Input>
          <Input>
            <label htmlFor="lastName">{t(RSVP_LNAME.key)}</label>
            <input
              type="text"
              id="lastName"
              value={lName}
              onChange={(e) => setLName(e.target.value)}
            />
          </Input>
          <Input>
            <label htmlFor="email">{t(RSVP_EMAIL.key)}</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Input>
          <InputsContainer>
            <Input style={{ marginRight: '30px' }}>
              <label htmlFor="yes">
                <input
                  type="radio"
                  id="yes"
                  name="rsvp"
                  value="yes"
                  onChange={(e) => setAttendance(e.target.value)}
                />
                {t(RSVP_YES.key)}
              </label>
            </Input>
            <Input>
              <label htmlFor="no">
                <input
                  type="radio"
                  id="no"
                  name="rsvp"
                  value="no"
                  onChange={(e) => setAttendance(e.target.value)}
                />
                {t(RSVP_NO.key)}
              </label>
            </Input>
          </InputsContainer>
        </Inputs>
      </InputsContainer>

      <TextareaInput value={msg} onChange={(e) => setMsg(e.target.value)}>
        <p>{t(RSVP_MSG.key)}</p>
        <textarea />
      </TextareaInput>
      <Input>
        <label htmlFor="submit">
          <Button id="submit">{t(RSVP_SUBMIT.key)}</Button>
        </label>
      </Input>
    </form>
  );
}
