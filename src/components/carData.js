const carData = [
    {
      id: 1,
      brand: "JOHN DEERE",
      rating: 112,
      carName: "Wheat Cultivator",
      category: "Farm Equipment",
      imgUrl: "https://images.unsplash.com/photo-1614977645968-6db1d7798ac7?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGFydmVzdGVyfGVufDB8fDB8fHww",
      model: "Model 3",
      price: 50,
      speed: "20kmpl",
      gps: "GPS Navigation",
      seatType: "Heated seats",
      automatic: "Automatic",
      description:
        " Looking for a high-performance wheat cultivator to enhance your farming operations? Our wheat cultivator is available for rent, offering efficiency, versatility, and ease of use. With adjustable cultivation depth, user-friendly controls, and robust construction, it's designed for durability and productivity.",
    },
  
    {
      id: 2,
      brand: "JOHN DEERE",
      rating: 102,
      category: "Farm Equipment",
      carName: "Paddy Harvesters",
      imgUrl: "https://st2.depositphotos.com/4156545/6326/i/950/depositphotos_63265931-stock-photo-frontview-of-rice-harvesting-with.jpg",
      model: "Model-2022",
      price: 50,
      speed: "20kmpl",
      gps: "GPS Navigation",
      seatType: "Heated seats",
      automatic: "Automatic",
      description:
        " Elevate your paddy harvest with our efficient rental paddy harvester. Engineered for speed, precision, and user-friendliness, it's your solution for a productive harvest season. Enjoy affordability, regular maintenance, flexibility, and expert support when you choose us. ",
    },
  
    {
      id: 3,
      brand: "JOHN DEERE ",
      rating: 132,
      carName: "Maize Harvester",
      category: "Farm Equipment",
      imgUrl:"https://blog.machinefinder.com/wp-content/uploads/2016/04/John-Deere-8800-Forage-Harvester.jpg",
      model: "Model-2022",
      price: 65,
      speed: "20kmpl",
      gps: "GPS Navigation",
      seatType: "Heated seats",
      automatic: "Automatic",
      description:
        " Optimize your maize harvesting with our efficient rental maize harvester. Featuring a high harvesting capacity, user-friendly controls, and adjustable settings, it's your key to a productive maize harvest. Our cost-effective rental option includes regular maintenance and flexible terms, accompanied by expert guidance to ensure a successful harvest",
    },
  
    {
      id: 4,
      brand: "John Deere",
      rating: 102,
      carName: "Grain Harvester ",
      category: "Farm Equipment",
      imgUrl: "https://www.deere.co.in/assets/images/region-1/products/tractors/e-series-tractors/john-deere-india-e-series-tractors.jpg",
      model: "Model-2022",
      price: 70,
      speed: "20kmpl",
      gps: "GPS Navigation",
      seatType: "Heated seats",
      automatic: "Automatic",
      description:
        " Elevate your grain harvesting with our efficient rental grain harvester. Offering high capacity, user-friendly controls, and adaptable settings, it's the key to maximizing productivity. Our cost-effective rental option includes regular maintenance, flexible terms, and expert support for a successful grain harvest",
    },
  
    {
      id: 5,
      brand: "John Deere",
      rating: 94,
      carName: "Rice Harvester",
      category: "Farm Equipment",
      imgUrl: "https://static.vecteezy.com/system/resources/previews/029/554/340/non_2x/harvester-machine-to-harvest-rice-field-generative-ai-photo.jpg",
      model: "Model-2022",
      price: 45,
      speed: "20kmpl",
      gps: "GPS Navigation",
      seatType: "Heated seats",
      automatic: "Automatic",
      description:
        " Enhance your rice harvesting experience with our top-notch rental rice harvester. Featuring a substantial capacity, user-friendly controls, and versatility to accommodate different rice crop conditions, it's the perfect solution to elevate productivity in your rice paddies.",
    },
  
    {
      id: 6,
      brand: "Jhon Deera",
      rating: 119,
      carName: "Trencher Machines",
      category: "Farm Equipment",
      imgUrl: "https://autocracymachinery.com/wp-content/uploads/2021/10/Stand-on-Wheel-Drive-02.webp",
      model: "Model-2022",
      price: 85,
      speed: "20kmpl",
      gps: "GPS Navigation",
      seatType: "Heated seats",
      automatic: "Automatic",
      description:
        " Elevate your excavation projects with our high-performance trencher machines available for rent. These rugged and efficient machines are designed to make trenching tasks a breeze, whether for utility installation, landscaping, or construction. With adjustable cutting depth, intuitive controls, and sturdy construction, our trenchers offer reliability and versatility",
    },
  
    {
      id: 7,
      brand: "Jhon Deera",
      rating: 82,
      carName: "Dump truck",
      category: "Farm Equipment",
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Freightliner_M2_106_6x4_2014_%2814240376744%29.jpg/1200px-Freightliner_M2_106_6x4_2014_%2814240376744%29.jpg",
      model: "Model 3",
      price: 50,
      speed: "20kmpl",
      gps: "GPS Navigation",
      seatType: "Heated seats",
      automatic: "Automatic",
      description:
        " Improve your hauling tasks with our robust dump trucks available for rent. These heavy-duty vehicles are built to handle large quantities of material, making them ideal for construction, mining, and other heavy industries",
    },
  
    {
      id: 8,
      brand: "Jhon Deera",
      rating: 52,
      carName: "Big Excavator ",
      category: "Farm Equipment",
      imgUrl: "https://acropolis-wp-content-uploads.s3.us-west-1.amazonaws.com/excavators-lined-up-construction-3.webp",
      model: "Model 3",
      price: 50,
      speed: "20kmpl",
      gps: "GPS Navigation",
      seatType: "Heated seats",
      automatic: "Automatic",
      description:
        " Enhance your excavation endeavors with our substantial large excavator, available for rent. Tailored for heavy-duty tasks in construction, mining, and substantial earthwork, this formidable machine boasts a capacious bucket, a high-powered engine, and advanced functionalities, ensuring unparalleled performance and efficiency.",
    },
    {
      id: 9,
      brand: "Jhon Deera",
      rating: 52,
      carName: "Chisel Plough",
      category: "Farm Equipment",
      imgUrl: "https://assets.tractorjunction.com/tractor-junction/assets/images/images/implementTractor/chisel-plough-35-1590052536.webp?format=webp",
      model: "Model 3",
      price: 50,
      speed: "20kmpl",
      gps: "GPS Navigation",
      seatType: "Heated seats",
      automatic: "Automatic",
      description:
        " Enhance your excavation endeavors with our substantial large excavator, available for rent. Tailored for heavy-duty tasks in construction, mining, and substantial earthwork, this formidable machine boasts a capacious bucket, a high-powered engine, and advanced functionalities, ensuring unparalleled performance and efficiency.",
    },
    {
      id: 10,
      brand: "Jhon Deera",
      rating: 52,
      carName: "Moldboard plough",
      category: "Farm Equipment",
      imgUrl: "https://i.ytimg.com/vi/fgWS5I6UKzc/maxresdefault.jpg",
      model: "Model 3",
      price: 50,
      speed: "20kmpl",
      gps: "GPS Navigation",
      seatType: "Heated seats",
      automatic: "Automatic",
      description:
        " Enhance your excavation endeavors with our substantial large excavator, available for rent. Tailored for heavy-duty tasks in construction, mining, and substantial earthwork, this formidable machine boasts a capacious bucket, a high-powered engine, and advanced functionalities, ensuring unparalleled performance and efficiency.",
    },
    {
      id: 11,
      brand: "Jhon Deera",
      rating: 52,
      carName: "Ridger Plough",
      category: "Farm Equipment",
      imgUrl: "https://3.imimg.com/data3/YG/YY/MY-2259091/ridger-plough-500x500.jpg",
      model: "Model 3",
      price: 50,
      speed: "20kmpl",
      gps: "GPS Navigation",
      seatType: "Heated seats",
      automatic: "Automatic",
      description:
        " Enhance your excavation endeavors with our substantial large excavator, available for rent. Tailored for heavy-duty tasks in construction, mining, and substantial earthwork, this formidable machine boasts a capacious bucket, a high-powered engine, and advanced functionalities, ensuring unparalleled performance and efficiency.",
    },
    {
      id: 12,
      brand: "Jhon Deera",
      rating: 52,
      carName: "Disc Plough",
      category: "Farm Equipment",
      imgUrl: "https://www.masseyferguson.com/content/dam/public/masseyfergusonglobal/markets/en/assets/implements/mf-fixed-disc-ploughs/features/mf-disc-ploughs-fd-1400x933.jpg",
      model: "Model 3",
      price: 50,
      speed: "20kmpl",
      gps: "GPS Navigation",
      seatType: "Heated seats",
      automatic: "Automatic",
      description:
        " Enhance your excavation endeavors with our substantial large excavator, available for rent. Tailored for heavy-duty tasks in construction, mining, and substantial earthwork, this formidable machine boasts a capacious bucket, a high-powered engine, and advanced functionalities, ensuring unparalleled performance and efficiency.",
    },
    {
      id: 13,
      brand: "Jhon Deera",
      rating: 52,
      carName: "One-Way Plough ",
      category: "Farm Equipment",
      imgUrl: "https://redpowerphotos.s3.us-east-2.amazonaws.com/monthly_2022_07/F8CACA94-BC72-4539-8508-72452868662B.jpeg.20230462ec471a2a273a5617d562ac8d.jpeg",
      model: "Model 3",
      price: 50,
      speed: "20kmpl",
      gps: "GPS Navigation",
      seatType: "Heated seats",
      automatic: "Automatic",
      description:
        " Enhance your excavation endeavors with our substantial large excavator, available for rent. Tailored for heavy-duty tasks in construction, mining, and substantial earthwork, this formidable machine boasts a capacious bucket, a high-powered engine, and advanced functionalities, ensuring unparalleled performance and efficiency.",
    },
    {
      id: 14,
      brand: "Jhon Deera",
      rating: 52,
      carName: "Utility Tractors  ",
      category: "Farm Equipment",
      imgUrl: "https://compactequip.com/wp-content/uploads/2018/08/utility-tractor.jpg",
      model: "Model 3",
      price: 50,
      speed: "20kmpl",
      gps: "GPS Navigation",
      seatType: "Heated seats",
      automatic: "Automatic",
      description:
        " Enhance your excavation endeavors with our substantial large excavator, available for rent. Tailored for heavy-duty tasks in construction, mining, and substantial earthwork, this formidable machine boasts a capacious bucket, a high-powered engine, and advanced functionalities, ensuring unparalleled performance and efficiency.",
    },
    {
      id: 15,
      brand: "Jhon Deera",
      rating: 52,
      carName: "Row Crop Tractors",
      category: "Farm Equipment",
      imgUrl: "https://www.deere.asia/assets/images/region-4/products/tractors/row-crop-tractors/row-crop-group/7family-rowcrop-r4a041418-1366.jpg",
      model: "Model 3",
      price: 50,
      speed: "20kmpl",
      gps: "GPS Navigation",
      seatType: "Heated seats",
      automatic: "Automatic",
      description:
        " Enhance your excavation endeavors with our substantial large excavator, available for rent. Tailored for heavy-duty tasks in construction, mining, and substantial earthwork, this formidable machine boasts a capacious bucket, a high-powered engine, and advanced functionalities, ensuring unparalleled performance and efficiency.",
    },
    {
      id: 16,
      brand: "Jhon Deera",
      rating: 52,
      carName: "Compact Tractors",
      category: "Farm Equipment",
      imgUrl: "https://www.deere.com/assets/images/region-4/products/tractors/compact-tractors/3-series-compact-tractors/3035d-r4x001921-rrd-1054x576.jpg",
      model: "Model 3",
      price: 50,
      speed: "20kmpl",
      gps: "GPS Navigation",
      seatType: "Heated seats",
      automatic: "Automatic",
      description:
        " Enhance your excavation endeavors with our substantial large excavator, available for rent. Tailored for heavy-duty tasks in construction, mining, and substantial earthwork, this formidable machine boasts a capacious bucket, a high-powered engine, and advanced functionalities, ensuring unparalleled performance and efficiency.",
    },
    {
      id: 17,
      brand: "Jhon Deera",
      rating: 52,
      carName: "Garden Tractors",
      category: "Farm Equipment",
      imgUrl: "https://blog.machinefinder.com/wp-content/uploads/2018/02/lawn_tractors_attach_implements_r4d047111_large_f78c1ce00384cf75d2ccb5b1510977ff4f8d5fa2-1024x576.jpg",
      model: "Model 3",
      price: 50,
      speed: "20kmpl",
      gps: "GPS Navigation",
      seatType: "Heated seats",
      automatic: "Automatic",
      description:
        " Enhance your excavation endeavors with our substantial large excavator, available for rent. Tailored for heavy-duty tasks in construction, mining, and substantial earthwork, this formidable machine boasts a capacious bucket, a high-powered engine, and advanced functionalities, ensuring unparalleled performance and efficiency.",
    },
  ];
  
  export default carData;
  