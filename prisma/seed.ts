import { PrismaClient } from '@prisma/client'

const db = new PrismaClient()

// async function main() {
//   const users = await db.user.createMany({
//     data: [
//       {
//         firstName: 'firstName',
//         lastName: 'lastName',
//         email: 'email@email.com',
//         password: '$2b$12$Vng91.9rqf3BrDFzeddxPuvqJLD1rGPswAXmcWoFzbVAstDf9MWYi', // password
//         role: 'ADMIN',
//       },
//       {
//         firstName: 'Alice',
//         lastName: 'Smith',
//         email: 'AliceSmith@email.com',
//         password: '$2b$12$Vng91.9rqf3BrDFzeddxPuvqJLD1rGPswAXmcWoFzbVAstDf9MWYi', // password
//         role: 'CC_COORDINATOR',
//       },
//       {
//         firstName: 'John',
//         lastName: 'Doe',
//         email: 'JohnDoe@email.com',
//         password: '$2b$12$Vng91.9rqf3BrDFzeddxPuvqJLD1rGPswAXmcWoFzbVAstDf9MWYi', // password
//       },
//     ],
//   })

//   const [user1, user2, user3] = await db.user.findMany()

//   const family = await db.family.createMany({
//     data: [{}, {}, {}, {}],
//   })

//   const [fam1, fam2, fam3, fam4] = await db.family.findMany()

//   const guardians = await db.guardian.createMany({
//     data: [
//       {
//         firstName: 'Adam',
//         lastName: 'Smith',
//         occupation: 'Hunter',
//         familyId: fam1.id,
//         relation: 'FATHER',
//       },
//       {
//         firstName: 'Eve',
//         lastName: 'Smith',
//         occupation: 'Gatherer',
//         familyId: fam1.id,
//         relation: 'MOTHER',
//       },
//       {
//         firstName: 'Lucifer',
//         lastName: 'Morningstar',
//         occupation: 'Guide',
//         familyId: fam2.id,
//         relation: 'GUARDIAN',
//       },
//       {
//         firstName: 'Abraham',
//         lastName: 'Lincoln',
//         occupation: 'President',
//         familyId: fam3.id,
//         relation: 'GUARDIAN',
//       },
//       {
//         firstName: 'Mary',
//         lastName: 'Magdalene',
//         occupation: 'Prostitute',
//         familyId: fam4.id,
//         relation: 'MOTHER',
//       },
//     ],
//   })

//   const fam5 = await db.family.create({
//     data: {
//       children: {
//         create: [
//           {
//             firstName: 'A',
//             lastName: 'A',
//             birthDate: new Date('1999-01-01'),
//             gender: 'FEMALE',
//           },
//           {
//             firstName: 'B',
//             lastName: 'B',
//             birthDate: new Date('1998-01-01'),
//             gender: 'MALE',
//           },
//           {
//             firstName: 'C',
//             lastName: 'C',
//             birthDate: new Date('1997-01-01'),
//             gender: 'OTHERS',
//           },
//         ],
//       },
//     },
//   })

//   const children = await db.child.createMany({
//     data: [
//       {
//         firstName: 'Cain',
//         lastName: 'Smith',
//         birthDate: new Date('2000-01-01'),
//         familyId: fam1.id,
//         gender: 'MALE',
//       },
//       {
//         firstName: 'Abel',
//         lastName: 'Smith',
//         birthDate: new Date('2001-02-03'),
//         familyId: fam1.id,
//         gender: 'MALE',
//       },
//       {
//         firstName: 'Seth',
//         lastName: 'Azazel',
//         birthDate: new Date('2002-03-04'),
//         familyId: fam2.id,
//         gender: 'FEMALE',
//       },
//       {
//         firstName: 'Isaac',
//         lastName: 'Lincoln',
//         birthDate: new Date('2003-04-05'),
//         familyId: fam3.id,
//         gender: 'MALE',
//       },
//       {
//         firstName: 'Isabelle',
//         lastName: 'Lincoln',
//         birthDate: new Date('2005-06-07'),
//         familyId: fam3.id,
//         gender: 'FEMALE',
//       },
//     ],
//   })

//   const child3 = await db.child.findFirst({
//     where: {
//       firstName: 'Seth',
//     },
//   })

//   const childInformation = await db.childInformation.create({
//     data: {
//       childId: child3!.id,
//       chores: 'Cleaning',
//       eyeColor: 'BLUE',
//       hairColor: 'BROWN',
//       height: 165.1,
//       weight: 50.1,
//       hobbies: 'Thinking',
//       pastimes: 'Sleeping',
//       sleepsOn: 'FLOOR',
//       spokenLanguages: 'English',
//     },
//   })

//   const childInformation2 = await db.childInformation.create({
//     data: {
//       child: {
//         create: {
//           firstName: 'Jacob',
//           lastName: 'Lincoln',
//           birthDate: new Date('2004-05-06'),
//           familyId: fam3.id,
//           gender: 'OTHERS',
//         },
//       },
//       chores: 'Cleaning',
//       eyeColor: 'GREEN',
//       hairColor: 'BLONDE',
//       height: 180.3,
//       weight: 70.2,
//       hobbies: 'Politics',
//       pastimes: 'Chess',
//       sleepsOn: 'BED',
//       spokenLanguages: 'English',
//     },
//   })

//   const childRecord1 = await db.childRecord.create({
//     data: {
//       child: {
//         create: {
//           firstName: 'Ezekiel',
//           lastName: 'Magdalene',
//           birthDate: new Date('2006-07-08'),
//           familyId: fam4.id,
//           gender: 'OTHERS',
//         },
//       },
//       dateOfVisit: new Date('2021-01-01'),
//       photoNumbers: '01',
//       sector: 'A',
//       interviewerId: user3.id,
//       validatorId: user2.id,
//     },
//   })

//   const childRecord2 = await db.childRecord.create({
//     data: {
//       dateOfVisit: new Date('2021-02-02'),
//       photoNumbers: '02',
//       sector: 'B',
//       interviewerId: user3.id,
//       validatorId: user2.id,
//     },
//   })

//   const children1 = await db.child.create({
//     data: {
//       firstName: 'Carol',
//       lastName: 'Magdalene',
//       birthDate: new Date('2007-08-09'),
//       familyId: fam4.id,
//       gender: 'FEMALE',
//       childInformation: {
//         create: {
//           chores: 'Washing dishes',
//           eyeColor: 'BLUE',
//           hairColor: 'BLONDE',
//           height: 154.2,
//           weight: 45.1,
//           hobbies: 'Sun bathing',
//           pastimes: 'Arts and crafts',
//           sleepsOn: 'BED',
//           spokenLanguages: 'English',
//           adConsent: true,
//           healthIssues: 'Asthma',
//         },
//       },
//       childRecordId: childRecord2.id,
//     },
//   })

//   const childRecord3 = await db.childRecord.create({
//     data: {
//       dateOfVisit: new Date('2021-03-03'),
//       photoNumbers: '03',
//       sector: 'C',
//       interviewerId: user3.id,
//       validatorId: user2.id,
//       child: {
//         create: {
//           firstName: 'David',
//           lastName: 'Magdalene',
//           birthDate: new Date('2008-09-10'),
//           familyId: fam1.id,
//           gender: 'MALE',
//         },
//       },
//     },
//   })

//   const childRecord4 = await db.childRecord.create({
//     data: {
//       dateOfVisit: new Date('2021-04-04'),
//       photoNumbers: '04',
//       sector: 'D',
//       interviewerId: user3.id,
//       validatorId: user2.id,
//       child: {
//         create: {
//           firstName: 'Elijah',
//           lastName: 'Black',
//           birthDate: new Date('2009-10-11'),
//           gender: 'OTHERS',
//           childInformation: {
//             create: {
//               chores: 'Washing dishes',
//               eyeColor: 'BROWN',
//               hairColor: 'BLACK',
//               height: 124.2,
//               weight: 35.1,
//               hobbies: 'Sun bathing',
//               pastimes: 'Arts and crafts',
//               sleepsOn: 'BED',
//               spokenLanguages: 'Filipino',
//               adConsent: true,
//             },
//           },
//           family: {
//             create: {
//               guardians: {
//                 create: [
//                   { firstName: 'Eliot', lastName: 'Black', occupation: 'Seaman', relation: 'FATHER' },
//                   { firstName: 'Elisha', lastName: 'Black', occupation: 'Entrepreneur', relation: 'MOTHER' },
//                 ],
//               },
//               household: {
//                 create: {
//                   address: '1234 Main Street',
//                   comments: 'This is a comment',
//                   floor: '1',
//                   numberOfBeds: 2,
//                   numberOfPeople: 4,
//                   overallCondition: 'GOOD',
//                   ownership: 'RENTED',
//                   roof: 'CONCRETE',
//                   roomTypeNumber: '1',
//                   walls: 'CONCRETE',
//                 },
//               },
//             },
//           },
//         },
//       },
//     },
//   })

//   const childRecord4Find = await db.childRecord.findFirst({
//     where: { sector: 'D' },
//     include: {
//       child: {
//         include: {
//           family: {
//             include: {
//               children: {
//                 include: {
//                   childInformation: true,
//                   childRecord: true,
//                 },
//               },
//               guardians: true,
//               household: true,
//             },
//           },
//           school: true,
//         },
//       },
//     },
//   })

//   console.log(JSON.stringify(childRecord4Find, null, 4))
// }

async function main() {
  await db.user.createMany({
    data: [
      {
        firstName: 'firstName',
        lastName: 'lastName',
        email: 'email@email.com',
        password: '$2b$12$Vng91.9rqf3BrDFzeddxPuvqJLD1rGPswAXmcWoFzbVAstDf9MWYi', // password
        role: 'ADMIN',
      },
      {
        firstName: 'Alice',
        lastName: 'Smith',
        email: 'AliceSmith@email.com',
        password: '$2b$12$Vng91.9rqf3BrDFzeddxPuvqJLD1rGPswAXmcWoFzbVAstDf9MWYi', // password
        role: 'CC_COORDINATOR',
      },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohnDoe@email.com',
        password: '$2b$12$Vng91.9rqf3BrDFzeddxPuvqJLD1rGPswAXmcWoFzbVAstDf9MWYi', // password
      },
    ],
  })

  const [user1, user2, user3] = await db.user.findMany()

  await db.childRecord.create({
    data: {
      dateOfVisit: new Date('2022-10-14'),
      photoNumbers: '01',
      sector: 'A',
      interviewerId: user3.id,
      validatorId: user2.id,
      child: {
        create: {
          firstName: 'Elijah',
          lastName: 'Black',
          birthDate: new Date('2009-10-11'),
          gender: 'OTHERS',
          childInformation: {
            create: {
              chores: 'Washing dishes',
              eyeColor: 'BROWN',
              hairColor: 'BLACK',
              height: 124.2,
              weight: 35.1,
              hobbies: 'Sun bathing',
              pastimes: 'Arts and crafts',
              sleepsOn: 'BED',
              spokenLanguages: 'Filipino',
              adConsent: true,
            },
          },
          schoolInformation: {
            create: {
              attendsSchool: true,
              name: 'Faker School',
              type: 'PUBLIC',
              academicYear: '2021-2022',
              currentGradeLevel: 'GRADE_1',
              favoriteSubjects: 'Math',
              mostRecentGradeLevelCompleted: 'KINDERGARTEN',
              transportation: 'WALK',
              travelTime: '30_MINUTES',
            },
          },
          familyRecord: {
            create: {
              guardians: {
                create: [
                  { firstName: 'Eliot', lastName: 'Black', occupation: 'Seaman', relation: 'FATHER' },
                  { firstName: 'Elisha', lastName: 'Black', occupation: 'Entrepreneur', relation: 'MOTHER' },
                ],
              },
              householdInformation: {
                create: {
                  address: '1234 Main Street',
                  comments: 'This is a comment',
                  floor: '1',
                  numberOfBeds: 2,
                  numberOfPeople: 4,
                  overallCondition: 'GOOD',
                  ownership: 'RENTED',
                  roof: 'CONCRETE',
                  roomTypeNumber: '1',
                  walls: 'CONCRETE',
                },
              },
            },
          },
        },
      },
    },
  })

  // await db.childRecord.create({})
}

main()
  .then(async () => {
    await db.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await db.$disconnect()
    process.exit(1)
  })
