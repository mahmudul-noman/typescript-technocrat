{


    // Declare Developer Information Type, T use for make dynamic smartwatch information 
    interface Developer<T> {
        name: string,
        computer: {
            brand: string,
            model: string,
            releaseYear: number
        },
        smartWatch: T
    }

    // Dynamic Smartwatch information
    interface ImilabWatch {
        name: string,
        model: string,
        price: number
    }


    // Write Developer Information
    const poorDev: Developer<ImilabWatch> = {
        name: "Mahmudul Hasan",
        computer: {
            brand: "Asus",
            model: "H50UE",
            releaseYear: 2021
        },
        smartWatch: {
            name: "Imilab Watch",
            model: "KW66",
            price: 2400
        }
    }































}