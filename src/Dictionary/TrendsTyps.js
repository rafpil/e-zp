const trendsTypes = [
    {
        "identifier": "1.1.1",
        "type": "Podstawowy bez negocjacji",
    },
    {
        "identifier": "1.1.2",
        "type": "Podstawowy z możliwością negocjacji",
    },
    {
        "identifier": "1.1.3",
        "type": "Podstawowy z negocjacjami",

    },
    // {
    //     "type": "Zamówienie udzielane jest w trybie partnerstwa innowacyjnego na podstawie: art. 297 ustawy",
    //     "Items": null,
    //     "identifier": "1.2"
    // },
    // {
    //     "type": "Zamówienie udzielane jest w trybie negocjacji bez ogłoszenia na podstawie:",
    //     "Items": [
    //         {
    //             "type": "art. 301 ust. 1 pkt 1 ustawy",
    //             "Items": [
    //                 {
    //                     "type": "w zw. z art. 209 ust. 1 pkt 2 ustawy",
    //                     "Items": null,
    //                     "identifier": "1.3.1.1"
    //                 },
    //                 {
    //                     "type": "w zw. z art. 209 ust. 1 pkt 3 ustawy",
    //                     "Items": null,
    //                     "identifier": "1.3.1.2"
    //                 }
    //             ]
    //         },
    //         {
    //             "type": "art. 301 ust. 1 pkt 2 ustawy",
    //             "Items": null,
    //             "identifier": "1.3.2"
    //         },
    //         {
    //             "type": "art. 301 ust. 1 pkt 3 ustawy",
    //             "Items": null,
    //             "identifier": "1.3.3"
    //         },
    //         {
    //             "type": "art. 301 ust. 1 pkt 4 ustawy",
    //             "Items": null,
    //             "identifier": "1.3.4"
    //         }
    //     ],
    //     "identifier": "1.3"
    // },
    // {
    //     "type": "Zamówienie udzielane jest w trybie zamówienia z wolnej ręki na podstawie:",
    //     "Items": [
    //         {
    //             "type": "art. 305 pkt 1 ustawy",
    //             "Items": [
    //                 {
    //                     "type": "w zw. z art. 214 ust. 1 pkt 1 ustawy",
    //                     "Items": null,
    //                     "identifier": "1.4.1.1"
    //                 },
    //                 {
    //                     "type": "w zw. z art. 214 ust. 1 pkt 2 ustawy",
    //                     "Items": null,
    //                     "identifier": "1.4.1.2"
    //                 },
    //                 {
    //                     "type": "w zw. z art. 214 ust. 1 pkt 3 ustawy",
    //                     "Items": null,
    //                     "identifier": "1.4.1.3"
    //                 },
    //                 {
    //                     "type": "w zw. z art. 214 ust. 1 pkt 4 ustawy",
    //                     "Items": null,
    //                     "identifier": "1.4.1.4"
    //                 },
    //                 {
    //                     "type": "w zw. z art. 214 ust. 1 pkt 5 ustawy",
    //                     "Items": null,
    //                     "identifier": "1.4.1.5"
    //                 },
    //                 {
    //                     "type": "w zw. z art. 214 ust. 1 pkt 7 ustawy",
    //                     "Items": null,
    //                     "identifier": "1.4.1.6"
    //                 },
    //                 {
    //                     "type": "w zw. z art. 214 ust. 1 pkt 8 ustawy",
    //                     "Items": null,
    //                     "identifier": "1.4.1.7"
    //                 },
    //                 {
    //                     "type": "w zw. z art. 214 ust. 1 pkt 9 ustawy",
    //                     "Items": null,
    //                     "identifier": "1.4.1.8"
    //                 },
    //                 {
    //                     "type": "w zw. z art. 214 ust. 1 pkt 10 ustawy",
    //                     "Items": null,
    //                     "identifier": "1.4.1.9"
    //                 },
    //                 {
    //                     "type": "w zw. z art. 214 ust. 1 pkt 11 ustawy",
    //                     "Items": null,
    //                     "identifier": "1.4.1.10"
    //                 },
    //                 {
    //                     "type": "w zw. z art. 214 ust. 1 pkt 12 ustawy",
    //                     "Items": null,
    //                     "identifier": "1.4.1.11"
    //                 },
    //                 {
    //                     "type": "w zw. z art. 214 ust. 1 pkt 13 ustawy",
    //                     "Items": null,
    //                     "identifier": "1.4.1.12"
    //                 },
    //                 {
    //                     "type": "w zw. z art. 214 ust. 1 pkt 14 ustawy",
    //                     "Items": null,
    //                     "identifier": "1.4.1.13"
    //                 }
    //             ]
    //         },
    //         {
    //             "type": "art. 305 pkt 2 ustawy",
    //             "Items": null,
    //             "identifier": "1.4.2"
    //         },
    //         {
    //             "type": "art. 305 pkt 3 ustawy",
    //             "Items": null,
    //             "identifier": "1.4.3"
    //         },
    //         {
    //             "type": "art. 305 pkt 4 ustawy",
    //             "Items": null,
    //             "identifier": "1.4.4"
    //         },
    //         {
    //             "type": "art. 305 pkt 5 ustawy",
    //             "Items": null,
    //             "identifier": "1.4.5"
    //         }
    //     ],
    //     "identifier": "1.4"
    // },
    {
        "identifier": "2.1",
        "type": "Przetarg nieograniczony",
    },
    {
        "identifier": "1",
        "type": "Przetarg nieograniczony",
    },
    // {
    //     "type": "Zamówienie udzielane jest w trybie przetargu ograniczonego na podstawie: art. 140 ustawy",
    //     "Items": null,
    //     "identifier": "2.2"
    // },
    // {
    //     "type": "Zamówienie udzielane jest w trybie negocjacji z ogłoszeniem na podstawie:",
    //     "Items": [
    //         {
    //             "type": "art. 153 pkt 1 ustawy",
    //             "Items": null,
    //             "identifier": "2.3.1"
    //         },
    //         {
    //             "type": "art. 153 pkt 2 ustawy",
    //             "Items": null,
    //             "identifier": "2.3.2"
    //         },
    //         {
    //             "type": "art. 153 pkt 3 ustawy",
    //             "Items": null,
    //             "identifier": "2.3.3"
    //         },
    //         {
    //             "type": "art. 153 pkt 4 ustawy",
    //             "Items": null,
    //             "identifier": "2.3.4"
    //         },
    //         {
    //             "type": "art. 153 pkt 5 ustawy",
    //             "Items": null,
    //             "identifier": "2.3.5"
    //         }
    //     ],
    //     "identifier": "2.3"
    // },
    // {
    //     "type": "Zamówienie udzielane jest w trybie dialogu konkurencyjnego na podstawie:",
    //     "Items": [
    //         {
    //             "type": "art. 169 ustawy w zw. z art. 153 pkt 1 ustawy",
    //             "Items": null,
    //             "identifier": "2.4.1"
    //         },
    //         {
    //             "type": "art. 169 ustawy w zw. z art. 153 pkt 2 ustawy",
    //             "Items": null,
    //             "identifier": "2.4.2"
    //         },
    //         {
    //             "type": "art. 169 ustawy w zw. z art. 153 pkt 3 ustawy",
    //             "Items": null,
    //             "identifier": "2.4.3"
    //         },
    //         {
    //             "type": "art. 169 ustawy w zw. z art. 153 pkt 4 ustawy",
    //             "Items": null,
    //             "identifier": "2.4.4"
    //         },
    //         {
    //             "type": "art. 169 ustawy w zw. z art. 153 pkt 5 ustawy",
    //             "Items": null,
    //             "identifier": "2.4.5"
    //         }
    //     ],
    //     "identifier": "2.4"
    // },
    // {
    //     "type": "Zamówienie udzielane jest w trybie partnerstwa innowacyjnego na podstawie: art. 189 ustawy",
    //     "Items": null,
    //     "identifier": "2.5"
    // },
    // {
    //     "type": "Zamówienie udzielane jest w trybie negocjacji bez ogłoszenia na podstawie:",
    //     "Items": [
    //         {
    //             "type": "art. 208 ustawy w zw. z art. 209 ust. 1 pkt 1 ustawy",
    //             "Items": null,
    //             "identifier": "2.6.1"
    //         },
    //         {
    //             "type": "art. 208 ustawy w zw. z art. 209 ust. 1 pkt 2 ustawy",
    //             "Items": null,
    //             "identifier": "2.6.2"
    //         },
    //         {
    //             "type": "art. 208 ustawy w zw. z art. 209 ust. 1 pkt 3 ustawy",
    //             "Items": null,
    //             "identifier": "2.6.3"
    //         },
    //         {
    //             "type": "art. 208 ustawy w zw. z art. 209 ust. 1 pkt 4 ustawy",
    //             "Items": null,
    //             "identifier": "2.6.4"
    //         }
    //     ],
    //     "identifier": "2.6"
    // },
    // {
    //     "type": "Zamówienie udzielane jest w trybie zamówienia z wolnej ręki na podstawie:",
    //     "Items": [
    //         {
    //             "type": "art. 214 ust. 1 pkt 1 ustawy",
    //             "Items": null,
    //             "identifier": "2.7.1"
    //         },
    //         {
    //             "type": "art. 214 ust. 1 pkt 2 ustawy",
    //             "Items": null,
    //             "identifier": "2.7.2"
    //         },
    //         {
    //             "type": "art. 214 ust. 1 pkt 3 ustawy",
    //             "Items": null,
    //             "identifier": "2.7.3"
    //         },
    //         {
    //             "type": "art. 214 ust. 1 pkt 4 ustawy",
    //             "Items": null,
    //             "identifier": "2.7.4"
    //         },
    //         {
    //             "type": "art. 214 ust. 1 pkt 5 ustawy",
    //             "Items": null,
    //             "identifier": "2.7.5"
    //         },
    //         {
    //             "type": "art. 214 ust. 1 pkt 6 ustawy",
    //             "Items": null,
    //             "identifier": "2.7.6"
    //         },
    //         {
    //             "type": "art. 214 ust. 1 pkt 7 ustawy",
    //             "Items": null,
    //             "identifier": "2.7.7"
    //         },
    //         {
    //             "type": "art. 214 ust. 1 pkt 8 ustawy",
    //             "Items": null,
    //             "identifier": "2.7.8"
    //         },
    //         {
    //             "type": "art. 214 ust. 1 pkt 9 ustawy",
    //             "Items": null,
    //             "identifier": "2.7.9"
    //         },
    //         {
    //             "type": "art. 214 ust. 1 pkt 10 ustawy",
    //             "Items": null,
    //             "identifier": "2.7.10"
    //         },
    //         {
    //             "type": "art. 214 ust. 1 pkt 11 ustawy",
    //             "Items": null,
    //             "identifier": "2.7.11"
    //         },
    //         {
    //             "type": "art. 214 ust. 1 pkt 12 ustawy",
    //             "Items": null,
    //             "identifier": "2.7.12"
    //         },
    //         {
    //             "type": "art. 214 ust. 1 pkt 13 ustawy",
    //             "Items": null,
    //             "identifier": "2.7.13"
    //         },
    //         {
    //             "type": "art. 214 ust. 1 pkt 14 ustawy",
    //             "Items": null,
    //             "identifier": "2.7.14"
    //         }
    //     ],
    //     "identifier": "2.7"
    // },
    // {
    //     "type": "Zamówienie sektorowe udzielane jest w trybie",
    //     "Items": [
    //         {
    //             "type": "przetargu nieograniczonego na podstawie: art. 378 ustawy",
    //             "Items": null,
    //             "identifier": "2.8.1"
    //         },
    //         {
    //             "type": "przetargu ograniczonego na podstawie: art. 379 ustawy",
    //             "Items": null,
    //             "identifier": "2.8.2"
    //         },
    //         {
    //             "type": "negocjacji z ogłoszeniem na podstawie: art. 380 ustawy",
    //             "Items": null,
    //             "identifier": "2.8.3"
    //         },
    //         {
    //             "type": "dialogu konkurencyjnego na podstawie: art. 382 ustawy",
    //             "Items": null,
    //             "identifier": "2.8.4"
    //         },
    //         {
    //             "type": "partnerstwa innowacyjnego na podstawie: art. 383 ustawy",
    //             "Items": null,
    //             "identifier": "2.8.5"
    //         },
    //         {
    //             "type": "negocjacji bez ogłoszenia na podstawie: art. 386 ustawy",
    //             "Items": [
    //                 {
    //                     "type": "w zw. z art. 209 ust. 1 pkt 1 ustawy",
    //                     "Items": null,
    //                     "identifier": "2.8.6.1"
    //                 },
    //                 {
    //                     "type": "w zw. z art. 209 ust. 1 pkt 2 ustawy",
    //                     "Items": null,
    //                     "identifier": "2.8.6.2"
    //                 },
    //                 {
    //                     "type": "w zw. z art. 209 ust. 1 pkt 3 ustawy",
    //                     "Items": null,
    //                     "identifier": "2.8.6.3"
    //                 },
    //                 {
    //                     "type": "w zw. z art. 209 ust. 1 pkt 4 ustawy",
    //                     "Items": null,
    //                     "identifier": "2.8.6.4"
    //                 }
    //             ],
    //             "identifier": "2.8.6"
    //         },
    //         {
    //             "type": "zamówienia z wolnej ręki na podstawie: art. 388 ustawy",
    //             "Items": [
    //                 {
    //                     "type": "w zw. z art. 214 ust. 1 pkt 1 ustawy",
    //                     "Items": null,
    //                     "identifier": "2.8.7.1"
    //                 },
    //                 {
    //                     "type": "w zw. z art. 214 ust. 1 pkt 2 ustawy",
    //                     "Items": null,
    //                     "identifier": "2.8.7.2"
    //                 },
    //                 {
    //                     "type": "w zw. z art. 214 ust. 1 pkt 3 ustawy",
    //                     "Items": null,
    //                     "identifier": "2.8.7.3"
    //                 },
    //                 {
    //                     "type": "w zw. z art. 214 ust. 1 pkt 4 ustawy",
    //                     "Items": null,
    //                     "identifier": "2.8.7.4"
    //                 },
    //                 {
    //                     "type": "w zw. z art. 214 ust. 1 pkt 5 ustawy",
    //                     "Items": null,
    //                     "identifier": "2.8.7.5"
    //                 },
    //                 {
    //                     "type": "w zw. z art. 214 ust. 1 pkt 6 ustawy",
    //                     "Items": null,
    //                     "identifier": "2.8.7.6"
    //                 },
    //                 {
    //                     "type": "w zw. z art. 214 ust. 1 pkt 9 ustawy",
    //                     "Items": null,
    //                     "identifier": "2.8.7.7"
    //                 },
    //                 {
    //                     "type": "w zw. z art. 214 ust. 1 pkt 10 ustawy",
    //                     "Items": null,
    //                     "identifier": "2.8.7.8"
    //                 },
    //                 {
    //                     "type": "w zw. z art. 214 ust. 1 pkt 11 ustawy",
    //                     "Items": null,
    //                     "identifier": "2.8.7.9"
    //                 },
    //                 {
    //                     "type": "w zw. z art. 214 ust. 1 pkt 12 ustawy",
    //                     "Items": null,
    //                     "identifier": "2.8.7.10"
    //                 },
    //                 {
    //                     "type": "w zw. z art. 214 ust. 1 pkt 13 ustawy",
    //                     "Items": null,
    //                     "identifier": "2.8.7.11"
    //                 },
    //                 {
    //                     "type": "w zw. z art. 214 ust. 1 pkt 14 ustawy",
    //                     "Items": null,
    //                     "identifier": "2.8.7.12"
    //                 }
    //             ],
    //             "identifier": "2.8.7"
    //         }
    //     ],
    //     "identifier": "2.8"
    // },
    // {
    //     "type": "Zamówienie w dziedzinach obronności i bezpieczeństwa udzielane jest w trybie",
    //     "Items": [
    //         {
    //             "type": "przetargu ograniczonego na podstawie: art. 411 ustawy",
    //             "Items": null,
    //             "identifier": "2.10.1"
    //         },
    //         {
    //             "type": "negocjacji z ogłoszeniem na podstawie: art. 412 ustawy",
    //             "Items": null,
    //             "identifier": "2.10.2"
    //         },
    //         {
    //             "type": "dialogu konkurencyjnego na podstawie: art. 413 ustawy",
    //             "Items": null,
    //             "identifier": "2.10.3"
    //         }
    //     ],
    //     "identifier": "2.10"
    // },
    // {
    //     "type": "Zamówienie w dziedzinach obronności i bezpieczeństwa udzielane jest w trybie negocjacji bez ogłoszenia na podstawie:",
    //     "Items": [
    //         {
    //             "type": "art. 414 ust. 2 pkt 1 ustawy",
    //             "Items": null,
    //             "identifier": "2.10.1"
    //         },
    //         {
    //             "type": "art. 414 ust. 2 pkt 2 ustawy",
    //             "Items": null,
    //             "identifier": "2.10.2"
    //         },
    //         {
    //             "type": "art. 414 ust. 2 pkt 3 ustawy",
    //             "Items": null,
    //             "identifier": "2.10.3"
    //         },
    //         {
    //             "type": "art. 414 ust. 2 pkt 4 ustawy",
    //             "Items": null,
    //             "identifier": "2.10.4"
    //         },
    //         {
    //             "type": "art. 414 ust. 2 pkt 5 ustawy",
    //             "Items": null,
    //             "identifier": "2.10.5"
    //         },
    //         {
    //             "type": "art. 414 ust. 2 pkt 6 ustawy",
    //             "Items": null,
    //             "identifier": "2.10.6"
    //         },
    //         {
    //             "type": "art. 414 ust. 2 pkt 7 ustawy",
    //             "Items": null,
    //             "identifier": "2.10.7"
    //         }
    //     ],
    //     "identifier": "2.11"
    // },
    // {
    //     "type": "Zamówienie w dziedzinach obronności i bezpieczeństwa udzielane jest w trybie zamówienia z wolnej ręki na podstawie:",
    //     "Items": [
    //         {
    //             "type": "art. 415 ust. 2 pkt 1 ustawy w zw. z art. 214 ust. 1 pkt 1 ustawy",
    //             "Items": null,
    //             "identifier": "2.12.1"
    //         },
    //         {
    //             "type": "art. 415 ust. 2 pkt 1 ustawy w zw. z art. 214 ust. 1 pkt 9 ustawy",
    //             "Items": null,
    //             "identifier": "2.12.2"
    //         },
    //         {
    //             "type": "art. 415 ust. 2 pkt 1 ustawy w zw. z art. 214 ust. 1 pkt 10 ustawy",
    //             "Items": null,
    //             "identifier": "2.12.3"
    //         },
    //         {
    //             "type": "art. 415 ust. 2 pkt 1 ustawy w zw. z art. 214 ust. 1 pkt 11 ustawy",
    //             "Items": null,
    //             "identifier": "2.12.4"
    //         },
    //         {
    //             "type": "art. 415 ust. 2 pkt 1 ustawy w zw. z art. 214 ust. 1 pkt 12 ustawy",
    //             "Items": null,
    //             "identifier": "2.12.5"
    //         },
    //         {
    //             "type": "art. 415 ust. 2 pkt 1 ustawy w zw. z art. 214 ust. 1 pkt 13 ustawy",
    //             "Items": null,
    //             "identifier": "2.12.6"
    //         },
    //         {
    //             "type": "art. 415 ust. 2 pkt 1 ustawy w zw. z art. 214 ust. 1 pkt 14 ustawy",
    //             "Items": null,
    //             "identifier": "2.12.7"
    //         },
    //         {
    //             "type": "art. 415 ust. 2 pkt 1 ustawy w zw. z art. 414 ust. 2 pkt 1 ustawy",
    //             "Items": null,
    //             "identifier": "2.12.8"
    //         },
    //         {
    //             "type": "art. 415 ust. 2 pkt 1 ustawy w zw. z art. 414 ust. 2 pkt 3 ustawy",
    //             "Items": null,
    //             "identifier": "2.12.9"
    //         },
    //         {
    //             "type": "art. 415 ust. 2 pkt 1 ustawy w zw. z art. 414 ust. 2 pkt 4 ustawy",
    //             "Items": null,
    //             "identifier": "2.12.10"
    //         },
    //         {
    //             "type": "art. 415 ust. 2 pkt 1 ustawy w zw. z art. 414 ust. 2 pkt 5 ustawy",
    //             "Items": null,
    //             "identifier": "2.12.11"
    //         },
    //         {
    //             "type": "art. 415 ust. 2 pkt 1 ustawy w zw. z art. 414 ust. 2 pkt 6 ustawy",
    //             "Items": null,
    //             "identifier": "2.12.12"
    //         },
    //         {
    //             "type": "art. 415 ust. 2 pkt 1 ustawy w zw. z art. 414 ust. 2 pkt 7 ustawy",
    //             "Items": null,
    //             "identifier": "2.12.13"
    //         },
    //         {
    //             "type": "art. 415 ust. 2 pkt 3 ustawy",
    //             "Items": null,
    //             "identifier": "2.12.14"
    //         },
    //         {
    //             "type": "art. 415 ust. 2 pkt 4 ustawy",
    //             "Items": null,
    //             "identifier": "2.12.15"
    //         },
    //         {
    //             "type": "art. 415 ust. 2 pkt 5 ustawy",
    //             "Items": null,
    //             "identifier": "2.12.16"
    //         },
    //         {
    //             "type": "art. 415 ust. 2 pkt 6 ustawy",
    //             "Items": null,
    //             "identifier": "2.12.17"
    //         },
    //         {
    //             "type": "art. 415 ust. 2 pkt 7 ustawy",
    //             "Items": null,
    //             "identifier": "2.12.18"
    //         }
    //     ],
    //     "identifier": "2.12"
    // }
]

export default trendsTypes;