
# Outreacher

By _[Jaylen Garner](https://github.com/JaylenGarner)_

Streamline your networking agenda and maximize the value of your outreach efforts, try it [here](https://outreacher.app/).

## Technologies Used

- JavaScript
- Next.js
- React
- Redux
- Tailwind CSS
- Next-Auth
- PostgresSQL
- Prisma
- Bcrypt
- Docker (Development)
- Day.js
- Yup (Validations)
- Vercel (Deployment)

## Overview

### Login/Signup
Outreacher immediately directs users to the splash page upon accessing the site. From there, users can choose to sign up or login. Any attempt to access site pages without a login will redirect users to the splash page.

![Recording 2023-09-10 at 12 05 55](https://github.com/JaylenGarner/Outreacher/assets/93837049/755ba6e9-2f25-41c2-94d8-b80cce0ca1b2)

### Dashboard

Upon logging in, users are greeted with two feeds: "Outreach" and "Applications." Initially, these feeds will be empty for new users, but they will provide helpful messages to assist them in getting started.

<img width="1407" alt="Screenshot 2023-09-10 at 12 23 13 PM" src="https://github.com/JaylenGarner/Outreacher/assets/93837049/2bae11e4-0d4c-4220-accb-cf32808207f7">

### Navigation Bar

The Navigation bar offers users two choices: they can either select 'Info' to access more details about the application or navigate to their Template list. The option to log out is available.

### Template List

New users start with the 'Outreach Example' template, and they can easily create new templates. Any additional templates they create will appear in this list. Selecting a template allows for editing and deletion.

<img width="551" alt="Screenshot 2023-09-10 at 12 42 26 PM" src="https://github.com/JaylenGarner/Outreacher/assets/93837049/1ea4ed28-8674-4ff2-962b-f55676cbe928">

### Create a Template

When crafting a template, provide it with a name and a body. Users can select from a list of available variables to insert into the template body. These variables will automatically populate with the corresponding data when the template is filled for an outreach message. A user can select a template from the template list to edit it.

![ezgif com-video-to-gif](https://github.com/JaylenGarner/Outreacher/assets/93837049/002ad53b-7ee1-4c41-82dd-c7dbe0eae482)


### Application Feed / Create Application

As users create applications, these applications will appear in the application feed. Selecting an application allows for editing, creating a contact, viewing it's contact list, and deleting the application. The application feed can be filtered by the status of each application. Each application card in the feed offers the ability to create a contact and access the application's contact list.

![ezgif com-video-to-gif](https://github.com/JaylenGarner/Outreacher/assets/93837049/2cea67b1-cff7-4ccc-8274-84266478ae4b)

### Create Contact

To create a contact for an application, click on the 'Create Contact' button. After you've created the contact, you can choose a template to automatically fill in the details. Once the template is filled, you can copy the message and confirm the outreach, which will start the outreach process for that contact.

![ezgif com-video-to-gif](https://github.com/JaylenGarner/Outreacher/assets/93837049/ce081840-39ac-4872-9f19-7d26006aab4d)


### Contact List

To view an application's list of contacts, simply click on the 'Contact List' button. Inside the contact list, you can select a contact for editing. While editing a contact, you can choose to see that contact's application details, automatically fill a template with their information, or delete the contact.

![ezgif com-video-to-gif](https://github.com/JaylenGarner/Outreacher/assets/93837049/207aecdd-0d4f-42fa-82d7-185a1ecf7838)

### Outreach Feed

Your Outreach feed undergoes daily updates as per the algorithm's recommendations for daily outreach targets. Once you've initiated the initial outreach, the contact will appear in your feed two days later. If this day coincides with a Saturday, Sunday, or a US holiday, the outreach will be postponed until the next eligible business day. This cycle continues for each contact until you have reached your final follow up. Marking a contact's status as 'ongoing correspondance' will also remove it from the outreach cycle. 

When you choose a contact from the Outreach Feed, you'll receive a prompt to choose a template to fill. After choosing the template, copying the content, and confirming the outreach, the contact will transition automatically to the next phase of the outreach cycle.

![ezgif com-video-to-gif](https://github.com/JaylenGarner/Outreacher/assets/93837049/cbeb9667-4555-4ab8-ac71-83dcd041af3a)

### Outreach Algorithm

![Screenshot 2023-09-10 at 1 55 33 PM](https://github.com/JaylenGarner/Outreacher/assets/93837049/ba8c0380-ea56-44a5-8226-a4702f93ed16)

### Info

The Info modal offers a brief description explaining the application's purpose, along with a welcoming message encouraging feedback and feature suggestions.

<img width="651" alt="Screenshot 2023-09-10 at 2 11 09 PM" src="https://github.com/JaylenGarner/Outreacher/assets/93837049/bde03f9f-86e2-4e64-91b5-1bd828c39d0a">

### Tooltips

When you hover over most of the application's buttons, a tooltip will appear providing information about the button's function.

### Mobile Responsiveness Design

The application dashboard's user interface adapts for smaller screen sizes, allowing users to switch between both feeds seamlessly. Every component of the application is designed to be fully responsive across all screen sizes.

![ezgif com-video-to-gif](https://github.com/JaylenGarner/Outreacher/assets/93837049/a876df97-2638-4c1d-970a-2785601b1525)


