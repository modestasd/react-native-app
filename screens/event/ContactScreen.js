import React from 'react';
import { Linking } from 'expo';

import ContactMenuItem from '../../components/event/ContactMenuItem';
import ScreenWrapper from '../../components/layout/ScreenWrapper'

const ContactScreen = () => {

  const handleCompletePress = () => {
    //add send notification to user phone if he has an app or email if not
  }

  const handleCallPress = () => {
    Linking.openURL('tel:+37065466167');
  }

  const handleSMSPress = () => {
    Linking.openURL(`sms:+37065466167`);
  }

  return (
    <ScreenWrapper>
      <ContactMenuItem title='Darbas atliktas' onPressEvent={handleCompletePress} iconName='check' />
      <ContactMenuItem title='Perkelti' onPressEvent={handleCompletePress} iconName='event' />
      <ContactMenuItem title='Skambinti' onPressEvent={handleCallPress} iconName='phone' />
      <ContactMenuItem title='Siusti SMS' onPressEvent={handleSMSPress} iconName='chat' />
    </ScreenWrapper>
  );
};

export default ContactScreen;
