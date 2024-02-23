const echartsData = [
        {
            name: "Financial",
            color: "hsl(49, 70%, 50%)",
            children: [
                {
                    name: "ROUTING_NUMBER",
                    color: "hsl(49, 70%, 50%)",
                    children: [
                        {
                            name: "Critical",
                            color: '#da1d23',
                            value: 1
                        }
                    ]
                },
                {
                    name: "CREDIT_CARD_EXPIRATION",
                    color: "hsl(49, 70%, 50%)",
                    children: [
                        {
                            name: "Critical",
                            color: "hsl(206, 70%, 50%)",
                            value: 1
                        }
                    ]
                },
                {
                    name: "CREDIT_CARD_NUMBER",
                    color: "hsl(49, 70%, 50%)",
                    children: [
                        {
                            name: "Critical",
                            color: "hsl(206, 70%, 50%)",
                            value: 1
                        }
                    ]
                },
                {
                    name: "BANK_ACCOUNT_NUMBER",
                    color: "hsl(49, 70%, 50%)",
                    children: [
                        {
                            name: "Critical",
                            color: "hsl(206, 70%, 50%)",
                            value: 1
                        }
                    ]
                },
                {
                    name: "UPI_ID",
                    color: "hsl(49, 70%, 50%)",
                    children: [
                        {
                            name: "Critical",
                            color: "hsl(206, 70%, 50%)",
                            value: 1
                        }
                    ]
                },
                {
                    name: "INSURANCE_POLICY_NUMBER",
                    color: "hsl(49, 70%, 50%)",
                    value: 1
                },
                {
                    name: "TRANSACTION_HISTORY",
                    color: "hsl(49, 70%, 50%)",
                    value: 1
                },
                {
                    name: "GSTIN",
                    color: "hsl(49, 70%, 50%)",
                    children: [
                        {
                            name: "Critical",
                            color: "hsl(206, 70%, 50%)",
                            value: 1
                        }
                    ]
                }
            ]
        },
        {
            name: "Personal",
            color: "hsl(220, 70%, 50%)",
            children: [
                {
                    name: "SOCIAL_SECURITY_NUMBER",
                    color: "hsl(220, 70%, 50%)",
                    children: [
                        {
                            name: "Critical",
                            color: "hsl(220, 70%, 50%)",
                            value: 1
                        }
                    ]
                },
                {
                    name: "PASSPORT_NUMBER",
                    color: "hsl(220, 70%, 50%)",
                    children: [
                        {
                            name: "Critical",
                            color: "hsl(220, 70%, 50%)",
                            value: 1
                        }
                    ]
                },
                {
                    name: "AADHAAR_NUMBER",
                    color: "hsl(220, 70%, 50%)",
                    children: [
                        {
                            name: "Critical",
                            color: "hsl(220, 70%, 50%)",
                            value: 1
                        }
                    ]
                },
                {
                    name: "FIRST_NAME",
                    color: "hsl(220, 70%, 50%)",
                    value: 1
                },
                {
                    name: "MIDDLE_NAME",
                    color: "hsl(220, 70%, 50%)",
                    value: 1
                },
                {
                    name: "LAST_NAME",
                    color: "hsl(220, 70%, 50%)",
                    value: 1
                },
                {
                    name: "NAME",
                    color: "hsl(220, 70%, 50%)",
                    value: 1
                },
                {
                    name: "DATE_OF_BIRTH",
                    color: "hsl(220, 70%, 50%)",
                    children: [
                        {
                            name: "Critical",
                            color: "hsl(220, 70%, 50%)",
                            value: 1
                        }
                    ]
                }
            ]
        },
        {
            "name": "Contact",
            "color": "hsl(220, 70%, 50%)",
            "children": [
              {
                "name": "PHONE_NUMBER",
                "color": "hsl(220, 70%, 50%)",
                "children": [
                  {
                    "name": "Critical",
                    "color": "hsl(220, 70%, 50%)",
                    "value": 1
                  }
                ]
              },
              {
                "name": "EMAIL_ADDRESS",
                "color": "hsl(220, 70%, 50%)",
                "value": 1
              },
              {
                "name": "ADDRESS",
                "color": "hsl(220, 70%, 50%)",
                "value": 1
              },
              {
                "name": "SOCIAL_MEDIA_PROFILE",
                "color": "hsl(220, 70%, 50%)",
                "value": 1
              }
            ]
          },
          {
            "name": "Location",
            "color": "hsl(220, 70%, 50%)",
            "children": [
              {
                "name": "COUNTRY",
                "color": "hsl(220, 70%, 50%)",
                "value": 1
              },
              {
                "name": "STATE",
                "color": "hsl(220, 70%, 50%)",
                "value": 1
              },
              {
                "name": "CITY",
                "color": "hsl(220, 70%, 50%)",
                "value": 1
              },
              {
                "name": "PINCODE",
                "color": "hsl(220, 70%, 50%)",
                "value": 1
              },
              {
                "name": "GEOLOCATION_DATA",
                "color": "hsl(220, 70%, 50%)",
                "children": [
                  {
                    "name": "Critical",
                    "color": "hsl(220, 70%, 50%)",
                    "value": 1
                  }
                ]
              },
              {
                "name": "IP_ADDRESS",
                "color": "hsl(220, 70%, 50%)",
                "children": [
                  {
                    "name": "Critical",
                    "color": "hsl(220, 70%, 50%)",
                    "value": 1
                  }
                ]
              }
            ]
          },
          {
            "name": "Professional",
            "color": "hsl(220, 70%, 50%)",
            "children": [
              {
                "name": "ORGANIZATION",
                "color": "hsl(220, 70%, 50%)",
                "value": 1
              },
              {
                "name": "OCCUPATION",
                "color": "hsl(220, 70%, 50%)",
                "value": 1
              },
              {
                "name": "EDUCATIONAL_QUALIFICATION",
                "color": "hsl(220, 70%, 50%)",
                "value": 1
              }
            ]
          },
          {
            "name": "Demographic",
            "color": "hsl(220, 70%, 50%)",
            "children": [
              {
                "name": "GENDER",
                "color": "hsl(220, 70%, 50%)",
                "value": 1
              },
              {
                "name": "AGE",
                "color": "hsl(220, 70%, 50%)",
                "value": 1
              },
              {
                "name": "LANGUAGE",
                "color": "hsl(220, 70%, 50%)",
                "value": 1
              }
            ]
          },
          {
            "name": "Security",
            "color": "hsl(220, 70%, 50%)",
            "children": [
              {
                "name": "SECRET",
                "color": "hsl(220, 70%, 50%)",
                "children": [
                  {
                    "name": "Critical",
                    "color": "hsl(220, 70%, 50%)",
                    "value": 1
                  }
                ]
              },
              {
                "name": "USERNAME",
                "color": "hsl(220, 70%, 50%)",
                "children": [
                  {
                    "name": "Critical",
                    "color": "hsl(220, 70%, 50%)",
                    "value": 1
                  }
                ]
              }
            ]
          }
          
          
    

];

export default echartsData;
