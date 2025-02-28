const echartsData = [
    {
        name: "AWS",
        color: "hsl(49, 70%, 50%)",
        children: [
            {
                name: "Service Account",
                color: "hsl(49, 70%, 50%)",
                value: 2
            },
            {
                name: "Application",
                color: "hsl(49, 70%, 50%)",
                value: 1
            }
        ]
    },
    {
        name: "Azure",
        color: "hsl(220, 70%, 50%)",
        children: [
            {
                name: "Service Account",
                color: "hsl(220, 70%, 50%)",
                value: 1
            },
            {
                name: "Application",
                color: "hsl(220, 70%, 50%)",
                value: 1
            }
        ]
    },
    {
        name: "GCP",
        color: "hsl(120, 70%, 50%)",
        children: [
            {
                name: "Service Account",
                color: "hsl(120, 70%, 50%)",
                value: 3
            }
        ]
    },
    {
        name: "Github",
        color: "hsl(30, 70%, 50%)",
        children: [
            {
                name: "Organization Account",
                color: "hsl(30, 70%, 50%)",
                value: 2
            }
        ]
    },
    {
        name: "Gitlab",
        color: "hsl(260, 70%, 50%)",
        children: [
            {
                name: "Group Account",
                color: "hsl(260, 70%, 50%)",
                value: 1
            }
        ]
    }
];

export default echartsData;
