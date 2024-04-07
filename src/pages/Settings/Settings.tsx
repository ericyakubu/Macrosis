import { Button, Container, Input, Page, SectionTitle } from '@/components/UI'
import { FunctionComponent } from 'react'
import classes from './Settings.module.scss'
import cn from 'classnames'

// TODO finish page

const Settings: FunctionComponent = () => {
  return (
    <Page>
      <Container className={cn([classes.container])}>
        <SectionTitle title="Account" show />
        <div>
          <img src="https://placehold.co/400x400" alt="" />
          {/* <h1>Change avatar</h1> */}
          <h1>Change password</h1>
          <Input type="password" label="Old password" />
          <Input type="password" label="New password" />
          <Input type="password" label="Repeat new password" />
          <h1>Change email</h1>
          <Input type="email" label="New email" />
          <h1>Change phone</h1>
          <Input type="tel" label="New phone" />
          <h1>Account: deletee</h1>
          <Button type="button">Delete</Button>
        </div>
        <SectionTitle title="Application" show />
        <div>
          <h1>Theme: light/dark</h1>
          <h1>Notifications: yes/no</h1>
          <h1>Notifications by: email/phone</h1>
          <h1>Language: en/ru</h1>
        </div>
      </Container>
    </Page>
  )
}

export default Settings
