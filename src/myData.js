const echartsData = [
    {
        name: "AWS",
        color: "hsl(49, 70%, 50%)",
        children: [
            {
                name: "API Token",
                color: "hsl(49, 70%, 50%)",
                children: [
                    {
                        name: "Critical",
                        color: "#da1d23",
                        value: 2
                    }
                ]
            },
            {
                name: "Key Pair",
                color: "hsl(49, 70%, 50%)",
                children: [
                    {
                        name: "Warning",
                        color: "hsl(49, 70%, 50%)",
                        value: 1
                    }
                ]
            }
        ]
    },
    {
        name: "Azure",
        color: "hsl(220, 70%, 50%)",
        children: [
            {
                name: "API Token",
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
                name: "OAuth Token",
                color: "hsl(220, 70%, 50%)",
                children: [
                    {
                        name: "Warning",
                        color: "hsl(206, 70%, 50%)",
                        value: 1
                    }
                ]
            }
        ]
    },
    {
        name: "GCP",
        color: "hsl(120, 70%, 50%)",
        children: [
            {
                name: "Service Account Key",
                color: "hsl(120, 70%, 50%)",
                children: [
                    {
                        name: "Critical",
                        color: "hsl(0, 70%, 50%)",
                        value: 3
                    }
                ]
            }
        ]
    },
    {
        name: "Github",
        color: "hsl(30, 70%, 50%)",
        children: [
            {
                name: "Personal Access Token",
                color: "hsl(30, 70%, 50%)",
                children: [
                    {
                        name: "Critical",
                        color: "hsl(0, 70%, 50%)",
                        value: 2
                    }
                ]
            }
        ]
    },
    {
        name: "Gitlab",
        color: "hsl(260, 70%, 50%)",
        children: [
            {
                name: "Access Token",
                color: "hsl(260, 70%, 50%)",
                children: [
                    {
                        name: "Warning",
                        color: "hsl(206, 70%, 50%)",
                        value: 1
                    }
                ]
            }
        ]
    }
];

export default echartsData;
