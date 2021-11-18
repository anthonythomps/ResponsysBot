// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

const { CardFactory, ActionTypes } = require('botbuilder');

class QnACardBuilder {
    /**
    * Get multi-turn prompts card.
    * @param {QnAMakerResult} result Result to be dispalyed as prompts.
    * @param {string} cardNoMatchText No match text.
    */
    static GetQnAPromptsCard(result) {
        var cardActions = [];
        result.context.prompts.forEach(prompt => {
            cardActions.push({
                value: prompt.displayText,
                type: ActionTypes.ImBack,
                title: prompt.displayText
            });
        });

        var heroCard = CardFactory.heroCard('', '', [], CardFactory.actions(cardActions));
        return { text: result.answer, attachments: [heroCard] };
    }

    /**
    * Get suggestion hero card to get user feedback.
    * @param {Array} suggestionList A list of suggested questions strings.
    * @param {string} cardTitle Title of the card.
    * @param {string} cardNoMatchText No match text.
    */
    static GetSuggestionCard(suggestionList, cardTitle, cardNoMatchText) {
        var cardActions = [];
        suggestionList.forEach(element => {
            cardActions.push({
                value: element,
                type: ActionTypes.ImBack,
                title: element
            });
        });

        cardActions.push({
            value: cardNoMatchText,
            type: ActionTypes.ImBack,
            title: cardNoMatchText
        });

        var heroCard = CardFactory.heroCard(
            '',
            '',
            [],
            CardFactory.actions(cardActions));

        return { text: cardTitle, attachments: [heroCard] };
    }
}

module.exports.QnACardBuilder = QnACardBuilder;

// SIG // Begin signature block
// SIG // MIInSgYJKoZIhvcNAQcCoIInOzCCJzcCAQExDzANBglg
// SIG // hkgBZQMEAgEFADB3BgorBgEEAYI3AgEEoGkwZzAyBgor
// SIG // BgEEAYI3AgEeMCQCAQEEEBDgyQbOONQRoqMAEEvTUJAC
// SIG // AQACAQACAQACAQACAQAwMTANBglghkgBZQMEAgEFAAQg
// SIG // YSfErS3ho2ojyxwXLFbPceEil2Su/Uz07DLPnpoxRLqg
// SIG // ghF5MIIIiTCCB3GgAwIBAgITNgAAAX7/b/0EpCVYEgAC
// SIG // AAABfjANBgkqhkiG9w0BAQsFADBBMRMwEQYKCZImiZPy
// SIG // LGQBGRYDR0JMMRMwEQYKCZImiZPyLGQBGRYDQU1FMRUw
// SIG // EwYDVQQDEwxBTUUgQ1MgQ0EgMDEwHhcNMjEwOTA5MDEy
// SIG // NjI2WhcNMjIwOTA5MDEyNjI2WjAkMSIwIAYDVQQDExlN
// SIG // aWNyb3NvZnQgQXp1cmUgQ29kZSBTaWduMIIBIjANBgkq
// SIG // hkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAkIdczHOhlavX
// SIG // 8oArJKfzvYOo0tIpSd4nZs/tiZBPvQGqzNAIidfwg0BE
// SIG // 0l+eiTofVZvJHX343aiXw9jaEldpTtXigBShEysoiSr2
// SIG // 3Ft/B+yYR9YfsggY2o4lssHAGf4qUV97DGDOZ15efhsR
// SIG // GaRkGyyLKy49uGYvXY9pHR3NA8am3ps5Qskogfp/axxX
// SIG // YvcxJ+l87k3/94ulzN+pVD2fsbemXJLqbtAgJ7uHWa9V
// SIG // 4sB72yb6qt0XFzlOY6dZvwCpODr/vY2hCjp2IhyW56Qv
// SIG // rysf2b/GmWo4T8lWN312/7coBjsm+tOxGJ+xdr+AHCS+
// SIG // aHD009wRlrb3tSrjsEUbNwIDAQABo4IFlTCCBZEwKQYJ
// SIG // KwYBBAGCNxUKBBwwGjAMBgorBgEEAYI3WwEBMAoGCCsG
// SIG // AQUFBwMDMD0GCSsGAQQBgjcVBwQwMC4GJisGAQQBgjcV
// SIG // CIaQ4w2E1bR4hPGLPoWb3RbOnRKBYIPdzWaGlIwyAgFk
// SIG // AgEMMIICdgYIKwYBBQUHAQEEggJoMIICZDBiBggrBgEF
// SIG // BQcwAoZWaHR0cDovL2NybC5taWNyb3NvZnQuY29tL3Br
// SIG // aWluZnJhL0NlcnRzL0JZMlBLSUNTQ0EwMS5BTUUuR0JM
// SIG // X0FNRSUyMENTJTIwQ0ElMjAwMSgyKS5jcnQwUgYIKwYB
// SIG // BQUHMAKGRmh0dHA6Ly9jcmwxLmFtZS5nYmwvYWlhL0JZ
// SIG // MlBLSUNTQ0EwMS5BTUUuR0JMX0FNRSUyMENTJTIwQ0El
// SIG // MjAwMSgyKS5jcnQwUgYIKwYBBQUHMAKGRmh0dHA6Ly9j
// SIG // cmwyLmFtZS5nYmwvYWlhL0JZMlBLSUNTQ0EwMS5BTUUu
// SIG // R0JMX0FNRSUyMENTJTIwQ0ElMjAwMSgyKS5jcnQwUgYI
// SIG // KwYBBQUHMAKGRmh0dHA6Ly9jcmwzLmFtZS5nYmwvYWlh
// SIG // L0JZMlBLSUNTQ0EwMS5BTUUuR0JMX0FNRSUyMENTJTIw
// SIG // Q0ElMjAwMSgyKS5jcnQwUgYIKwYBBQUHMAKGRmh0dHA6
// SIG // Ly9jcmw0LmFtZS5nYmwvYWlhL0JZMlBLSUNTQ0EwMS5B
// SIG // TUUuR0JMX0FNRSUyMENTJTIwQ0ElMjAwMSgyKS5jcnQw
// SIG // ga0GCCsGAQUFBzAChoGgbGRhcDovLy9DTj1BTUUlMjBD
// SIG // UyUyMENBJTIwMDEsQ049QUlBLENOPVB1YmxpYyUyMEtl
// SIG // eSUyMFNlcnZpY2VzLENOPVNlcnZpY2VzLENOPUNvbmZp
// SIG // Z3VyYXRpb24sREM9QU1FLERDPUdCTD9jQUNlcnRpZmlj
// SIG // YXRlP2Jhc2U/b2JqZWN0Q2xhc3M9Y2VydGlmaWNhdGlv
// SIG // bkF1dGhvcml0eTAdBgNVHQ4EFgQUbnzITVXlsHgMhs3R
// SIG // W8ZMWvMtVowwDgYDVR0PAQH/BAQDAgeAMFAGA1UdEQRJ
// SIG // MEekRTBDMSkwJwYDVQQLEyBNaWNyb3NvZnQgT3BlcmF0
// SIG // aW9ucyBQdWVydG8gUmljbzEWMBQGA1UEBRMNMjM2MTY3
// SIG // KzQ2Nzk3NDCCAeYGA1UdHwSCAd0wggHZMIIB1aCCAdGg
// SIG // ggHNhj9odHRwOi8vY3JsLm1pY3Jvc29mdC5jb20vcGtp
// SIG // aW5mcmEvQ1JML0FNRSUyMENTJTIwQ0ElMjAwMSgyKS5j
// SIG // cmyGMWh0dHA6Ly9jcmwxLmFtZS5nYmwvY3JsL0FNRSUy
// SIG // MENTJTIwQ0ElMjAwMSgyKS5jcmyGMWh0dHA6Ly9jcmwy
// SIG // LmFtZS5nYmwvY3JsL0FNRSUyMENTJTIwQ0ElMjAwMSgy
// SIG // KS5jcmyGMWh0dHA6Ly9jcmwzLmFtZS5nYmwvY3JsL0FN
// SIG // RSUyMENTJTIwQ0ElMjAwMSgyKS5jcmyGMWh0dHA6Ly9j
// SIG // cmw0LmFtZS5nYmwvY3JsL0FNRSUyMENTJTIwQ0ElMjAw
// SIG // MSgyKS5jcmyGgb1sZGFwOi8vL0NOPUFNRSUyMENTJTIw
// SIG // Q0ElMjAwMSgyKSxDTj1CWTJQS0lDU0NBMDEsQ049Q0RQ
// SIG // LENOPVB1YmxpYyUyMEtleSUyMFNlcnZpY2VzLENOPVNl
// SIG // cnZpY2VzLENOPUNvbmZpZ3VyYXRpb24sREM9QU1FLERD
// SIG // PUdCTD9jZXJ0aWZpY2F0ZVJldm9jYXRpb25MaXN0P2Jh
// SIG // c2U/b2JqZWN0Q2xhc3M9Y1JMRGlzdHJpYnV0aW9uUG9p
// SIG // bnQwHwYDVR0jBBgwFoAUllGE4Gtve/7YBqvD8oXmKa5q
// SIG // +dQwHwYDVR0lBBgwFgYKKwYBBAGCN1sBAQYIKwYBBQUH
// SIG // AwMwDQYJKoZIhvcNAQELBQADggEBAFNUZq2bELWmMfHQ
// SIG // bvcwusOE1xLbpndztAKz+1tAqO5zRQg07/KcajjNm8/6
// SIG // R+PQ13Z83Fwk41I3IqNN1fkDzt0JfMTjKpvGxPSnKH/n
// SIG // z5OA8g2OcvmM8UMpOPVEZ+Hmt1oYoQCZIP8ZxS4ip21l
// SIG // vIsqsYnvgeOLvXT327Fq8XIHnc0px9Gl8HyLdvSCgqRh
// SIG // y++KwQ2yh13S9KRI3/XNmAOjoktSB+1/7LgYxBWuCxGD
// SIG // 00hStgCV6YDO6vXZkr7WuAsrnUaGH9QVzykfgszU/Vy+
// SIG // WSV/C1LguS62YG7ey845VvtVJqNjrJlDt2AO/7Obx+k6
// SIG // nOrmfYrCMLIrdF36Lh0wggjoMIIG0KADAgECAhMfAAAA
// SIG // UeqP9pxzDKg7AAAAAABRMA0GCSqGSIb3DQEBCwUAMDwx
// SIG // EzARBgoJkiaJk/IsZAEZFgNHQkwxEzARBgoJkiaJk/Is
// SIG // ZAEZFgNBTUUxEDAOBgNVBAMTB2FtZXJvb3QwHhcNMjEw
// SIG // NTIxMTg0NDE0WhcNMjYwNTIxMTg1NDE0WjBBMRMwEQYK
// SIG // CZImiZPyLGQBGRYDR0JMMRMwEQYKCZImiZPyLGQBGRYD
// SIG // QU1FMRUwEwYDVQQDEwxBTUUgQ1MgQ0EgMDEwggEiMA0G
// SIG // CSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDJmlIJfQGe
// SIG // jVbXKpcyFPoFSUllalrinfEV6JMc7i+bZDoL9rNHnHDG
// SIG // fJgeuRIYO1LY/1f4oMTrhXbSaYRCS5vGc8145WcTZG90
// SIG // 8bGDCWr4GFLc411WxA+Pv2rteAcz0eHMH36qTQ8L0o3X
// SIG // Ob2n+x7KJFLokXV1s6pF/WlSXsUBXGaCIIWBXyEchv+s
// SIG // M9eKDsUOLdLTITHYJQNWkiryMSEbxqdQUTVZjEz6eLRL
// SIG // kofDAo8pXirIYOgM770CYOiZrcKHK7lYOVblx22pdNaw
// SIG // Y8Te6a2dfoCaWV1QUuazg5VHiC4p/6fksgEILptOKhx9
// SIG // c+iapiNhMrHsAYx9pUtppeaFAgMBAAGjggTcMIIE2DAS
// SIG // BgkrBgEEAYI3FQEEBQIDAgACMCMGCSsGAQQBgjcVAgQW
// SIG // BBQSaCRCIUfL1Gu+Mc8gpMALI38/RzAdBgNVHQ4EFgQU
// SIG // llGE4Gtve/7YBqvD8oXmKa5q+dQwggEEBgNVHSUEgfww
// SIG // gfkGBysGAQUCAwUGCCsGAQUFBwMBBggrBgEFBQcDAgYK
// SIG // KwYBBAGCNxQCAQYJKwYBBAGCNxUGBgorBgEEAYI3CgMM
// SIG // BgkrBgEEAYI3FQYGCCsGAQUFBwMJBggrBgEFBQgCAgYK
// SIG // KwYBBAGCN0ABAQYLKwYBBAGCNwoDBAEGCisGAQQBgjcK
// SIG // AwQGCSsGAQQBgjcVBQYKKwYBBAGCNxQCAgYKKwYBBAGC
// SIG // NxQCAwYIKwYBBQUHAwMGCisGAQQBgjdbAQEGCisGAQQB
// SIG // gjdbAgEGCisGAQQBgjdbAwEGCisGAQQBgjdbBQEGCisG
// SIG // AQQBgjdbBAEGCisGAQQBgjdbBAIwGQYJKwYBBAGCNxQC
// SIG // BAweCgBTAHUAYgBDAEEwCwYDVR0PBAQDAgGGMBIGA1Ud
// SIG // EwEB/wQIMAYBAf8CAQAwHwYDVR0jBBgwFoAUKV5RXmSu
// SIG // NLnrrJwNp4x1AdEJCygwggFoBgNVHR8EggFfMIIBWzCC
// SIG // AVegggFToIIBT4YxaHR0cDovL2NybC5taWNyb3NvZnQu
// SIG // Y29tL3BraWluZnJhL2NybC9hbWVyb290LmNybIYjaHR0
// SIG // cDovL2NybDIuYW1lLmdibC9jcmwvYW1lcm9vdC5jcmyG
// SIG // I2h0dHA6Ly9jcmwzLmFtZS5nYmwvY3JsL2FtZXJvb3Qu
// SIG // Y3JshiNodHRwOi8vY3JsMS5hbWUuZ2JsL2NybC9hbWVy
// SIG // b290LmNybIaBqmxkYXA6Ly8vQ049YW1lcm9vdCxDTj1B
// SIG // TUVSb290LENOPUNEUCxDTj1QdWJsaWMlMjBLZXklMjBT
// SIG // ZXJ2aWNlcyxDTj1TZXJ2aWNlcyxDTj1Db25maWd1cmF0
// SIG // aW9uLERDPUFNRSxEQz1HQkw/Y2VydGlmaWNhdGVSZXZv
// SIG // Y2F0aW9uTGlzdD9iYXNlP29iamVjdENsYXNzPWNSTERp
// SIG // c3RyaWJ1dGlvblBvaW50MIIBqwYIKwYBBQUHAQEEggGd
// SIG // MIIBmTBHBggrBgEFBQcwAoY7aHR0cDovL2NybC5taWNy
// SIG // b3NvZnQuY29tL3BraWluZnJhL2NlcnRzL0FNRVJvb3Rf
// SIG // YW1lcm9vdC5jcnQwNwYIKwYBBQUHMAKGK2h0dHA6Ly9j
// SIG // cmwyLmFtZS5nYmwvYWlhL0FNRVJvb3RfYW1lcm9vdC5j
// SIG // cnQwNwYIKwYBBQUHMAKGK2h0dHA6Ly9jcmwzLmFtZS5n
// SIG // YmwvYWlhL0FNRVJvb3RfYW1lcm9vdC5jcnQwNwYIKwYB
// SIG // BQUHMAKGK2h0dHA6Ly9jcmwxLmFtZS5nYmwvYWlhL0FN
// SIG // RVJvb3RfYW1lcm9vdC5jcnQwgaIGCCsGAQUFBzAChoGV
// SIG // bGRhcDovLy9DTj1hbWVyb290LENOPUFJQSxDTj1QdWJs
// SIG // aWMlMjBLZXklMjBTZXJ2aWNlcyxDTj1TZXJ2aWNlcyxD
// SIG // Tj1Db25maWd1cmF0aW9uLERDPUFNRSxEQz1HQkw/Y0FD
// SIG // ZXJ0aWZpY2F0ZT9iYXNlP29iamVjdENsYXNzPWNlcnRp
// SIG // ZmljYXRpb25BdXRob3JpdHkwDQYJKoZIhvcNAQELBQAD
// SIG // ggIBAFAQI7dPD+jfXtGt3vJp2pyzA/HUu8hjKaRpM3op
// SIG // ya5G3ocprRd7vdTHb8BDfRN+AD0YEmeDB5HKQoG6xHPI
// SIG // 5TXuIi5sm/LeADbV3C2q0HQOygS/VT+m1W7a/752hMIn
// SIG // +L4ZuyxVeSBpfwf7oQ4YSZPh6+ngZvBHgfBaVz4O9/wc
// SIG // fw91QDZnTgK9zAh9yRKKls2bziPEnxeOZMVNaxyV0v15
// SIG // 2PY2xjqIafIkUjK6vY9LtVFjJXenVUAmn3WCPWNFC1YT
// SIG // IIHw/mD2cTfPy7QA1pT+GPARAKt0bKtq9aCd/Ym0b5tP
// SIG // bpgCiRtzyb7fbNS1dE740re0COE67YV2wbeo2sXixzvL
// SIG // ftH8L7s9xv9wV+G22qyKt6lmKLjFK1yMw4Ni5fMabcgm
// SIG // zRvSjAcbqgp3tk4a8emaaH0rz8MuuIP+yrxtREPXSqL/
// SIG // C5bzMzsikuDW9xH10graZzSmPjilzpRfRdu20/9UQmC7
// SIG // eVPZ4j1WNa1oqPHfzET3ChIzJ6Q9G3NPCB+7KwX0OQmK
// SIG // yv7IDimj8U/GlsHD1z+EF/fYMf8YXG15LamaOAohsw/y
// SIG // wO6SYSreVW+5Y0mzJutnBC9Cm9ozj1+/4kqksrlhZgR/
// SIG // CSxhFH3BTweH8gP2FEISRtShDZbuYymynY1un+RyfiK9
// SIG // +iVTLdD1h/SxyxDpZMtimb4CgJQlMYIVKTCCFSUCAQEw
// SIG // WDBBMRMwEQYKCZImiZPyLGQBGRYDR0JMMRMwEQYKCZIm
// SIG // iZPyLGQBGRYDQU1FMRUwEwYDVQQDEwxBTUUgQ1MgQ0Eg
// SIG // MDECEzYAAAF+/2/9BKQlWBIAAgAAAX4wDQYJYIZIAWUD
// SIG // BAIBBQCgga4wGQYJKoZIhvcNAQkDMQwGCisGAQQBgjcC
// SIG // AQQwHAYKKwYBBAGCNwIBCzEOMAwGCisGAQQBgjcCARUw
// SIG // LwYJKoZIhvcNAQkEMSIEIJFbrgNlKztCj6VA/AJWqrDB
// SIG // zPanvfB6gx93fsI0fOSVMEIGCisGAQQBgjcCAQwxNDAy
// SIG // oBSAEgBNAGkAYwByAG8AcwBvAGYAdKEagBhodHRwOi8v
// SIG // d3d3Lm1pY3Jvc29mdC5jb20wDQYJKoZIhvcNAQEBBQAE
// SIG // ggEAVCXOWu4BH0YiPLWcjC4qkVz1BjmJ8gS9aAyrqfHJ
// SIG // yHqyUSl6hdq6YGBsbn3ISCQPcMRC7iy9yLYe99VfkXuW
// SIG // mGG+R1yXtpwVna16rlRJaEuBx5MQATwWmx2eNyQRCogX
// SIG // GdGcgzO04qx1PhSSNYxDUcJrrw5om2DMLTA68OsW7xfq
// SIG // /o/Ivrvvt1qeKucO1JCqOQ3IsMAyDZ4GXIDKe38RqQkT
// SIG // A4kRQkZ0a+wm/MtjPf3+/GTtNIdhC1+vEVFwyfi/42mj
// SIG // 6dQGS04XR7JDw1kvpMKLVMy1r9t9BBSVMO9cXaYm8Vjo
// SIG // 7scxzpn97Fx2EgeOVQvsphG7e69sOLoNm+kMxaGCEvEw
// SIG // ghLtBgorBgEEAYI3AwMBMYIS3TCCEtkGCSqGSIb3DQEH
// SIG // AqCCEsowghLGAgEDMQ8wDQYJYIZIAWUDBAIBBQAwggFV
// SIG // BgsqhkiG9w0BCRABBKCCAUQEggFAMIIBPAIBAQYKKwYB
// SIG // BAGEWQoDATAxMA0GCWCGSAFlAwQCAQUABCBmUMOfosP1
// SIG // nI1LPdPRjMBd+JiMrorx+b5S/HYkTuR52wIGYYG/hXze
// SIG // GBMyMDIxMTEwOTEwMTg1NC45OTZaMASAAgH0oIHUpIHR
// SIG // MIHOMQswCQYDVQQGEwJVUzETMBEGA1UECBMKV2FzaGlu
// SIG // Z3RvbjEQMA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UEChMV
// SIG // TWljcm9zb2Z0IENvcnBvcmF0aW9uMSkwJwYDVQQLEyBN
// SIG // aWNyb3NvZnQgT3BlcmF0aW9ucyBQdWVydG8gUmljbzEm
// SIG // MCQGA1UECxMdVGhhbGVzIFRTUyBFU046MEE1Ni1FMzI5
// SIG // LTRENEQxJTAjBgNVBAMTHE1pY3Jvc29mdCBUaW1lLVN0
// SIG // YW1wIFNlcnZpY2Wggg5EMIIE9TCCA92gAwIBAgITMwAA
// SIG // AVt8sLo0ZzfBpwAAAAABWzANBgkqhkiG9w0BAQsFADB8
// SIG // MQswCQYDVQQGEwJVUzETMBEGA1UECBMKV2FzaGluZ3Rv
// SIG // bjEQMA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UEChMVTWlj
// SIG // cm9zb2Z0IENvcnBvcmF0aW9uMSYwJAYDVQQDEx1NaWNy
// SIG // b3NvZnQgVGltZS1TdGFtcCBQQ0EgMjAxMDAeFw0yMTAx
// SIG // MTQxOTAyMTZaFw0yMjA0MTExOTAyMTZaMIHOMQswCQYD
// SIG // VQQGEwJVUzETMBEGA1UECBMKV2FzaGluZ3RvbjEQMA4G
// SIG // A1UEBxMHUmVkbW9uZDEeMBwGA1UEChMVTWljcm9zb2Z0
// SIG // IENvcnBvcmF0aW9uMSkwJwYDVQQLEyBNaWNyb3NvZnQg
// SIG // T3BlcmF0aW9ucyBQdWVydG8gUmljbzEmMCQGA1UECxMd
// SIG // VGhhbGVzIFRTUyBFU046MEE1Ni1FMzI5LTRENEQxJTAj
// SIG // BgNVBAMTHE1pY3Jvc29mdCBUaW1lLVN0YW1wIFNlcnZp
// SIG // Y2UwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIB
// SIG // AQDIJH+l7PXaoXrLpi5bZ5epcI4g9Y4fiKc/+o+auQkM
// SIG // 0p22lbqOCogokqa+VraqlZQ+50/91l+ler3KTUFeXHbV
// SIG // VcGnzaS598hfn0TaFFodUPbvFxokl/GM1UvKuvCTxYkT
// SIG // uBzMzKSwmko3H0GSHegorpMi0K7ip0hcHRoTMROxgmsm
// SIG // kPGQ8hDx7PwtseAAGDBbFTrLEnUfI2/H8wHpN0jZWbVS
// SIG // ndCm/IqPt15EOeDL1F1fXFS9f3g3V1VQQajoR86CbMvn
// SIG // Nsv7N1voBF/EG/Tv24wZEeoSGjsBAMOzbuNP0zFX8Fye
// SIG // 4OUfxzVwre3OCGozTeFvgroHsrC52G6kZlvpAgMBAAGj
// SIG // ggEbMIIBFzAdBgNVHQ4EFgQUZectNYhtt1MgXUx/9eU5
// SIG // yZi6qy4wHwYDVR0jBBgwFoAU1WM6XIoxkPNDe3xGG8Uz
// SIG // aFqFbVUwVgYDVR0fBE8wTTBLoEmgR4ZFaHR0cDovL2Ny
// SIG // bC5taWNyb3NvZnQuY29tL3BraS9jcmwvcHJvZHVjdHMv
// SIG // TWljVGltU3RhUENBXzIwMTAtMDctMDEuY3JsMFoGCCsG
// SIG // AQUFBwEBBE4wTDBKBggrBgEFBQcwAoY+aHR0cDovL3d3
// SIG // dy5taWNyb3NvZnQuY29tL3BraS9jZXJ0cy9NaWNUaW1T
// SIG // dGFQQ0FfMjAxMC0wNy0wMS5jcnQwDAYDVR0TAQH/BAIw
// SIG // ADATBgNVHSUEDDAKBggrBgEFBQcDCDANBgkqhkiG9w0B
// SIG // AQsFAAOCAQEApzNrO6YTGpnOEHVaJaztWV0YgzFFXYLv
// SIG // f8qvIO5CFZfn5JVFdlZaLrevn6TqgBp3sDLcHpxbWoFY
// SIG // VSfB2rvDcJPiAIQdAdOA6GzQ8O7+ChEwEX/CjfIEx+ge
// SIG // 0Yx4a3jA1oO4nFdA7KI/DCAPAIq1pcH+J6/KSh9J9qxE
// SIG // 7HgSQ1nN3W1NCEyRB9UcxYRpFuyMzT0AjteuU6ezS516
// SIG // eJmmc6FcfD8ojjTun8g2a9MqlbofTqlh/nz2WEP2GBco
// SIG // ccvoR1jrqmKXPNz4Z9bwNAHtflp+G53umRoz8USOrMbD
// SIG // CJHQVw9ByS8je2H0q2zlQGMI2Fjh63rBmbr6BGhIA0Vl
// SIG // KzCCBnEwggRZoAMCAQICCmEJgSoAAAAAAAIwDQYJKoZI
// SIG // hvcNAQELBQAwgYgxCzAJBgNVBAYTAlVTMRMwEQYDVQQI
// SIG // EwpXYXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRtb25kMR4w
// SIG // HAYDVQQKExVNaWNyb3NvZnQgQ29ycG9yYXRpb24xMjAw
// SIG // BgNVBAMTKU1pY3Jvc29mdCBSb290IENlcnRpZmljYXRl
// SIG // IEF1dGhvcml0eSAyMDEwMB4XDTEwMDcwMTIxMzY1NVoX
// SIG // DTI1MDcwMTIxNDY1NVowfDELMAkGA1UEBhMCVVMxEzAR
// SIG // BgNVBAgTCldhc2hpbmd0b24xEDAOBgNVBAcTB1JlZG1v
// SIG // bmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlv
// SIG // bjEmMCQGA1UEAxMdTWljcm9zb2Z0IFRpbWUtU3RhbXAg
// SIG // UENBIDIwMTAwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAw
// SIG // ggEKAoIBAQCpHQ28dxGKOiDs/BOX9fp/aZRrdFQQ1aUK
// SIG // AIKF++18aEssX8XD5WHCdrc+Zitb8BVTJwQxH0EbGpUd
// SIG // zgkTjnxhMFmxMEQP8WCIhFRDDNdNuDgIs0Ldk6zWczBX
// SIG // JoKjRQ3Q6vVHgc2/JGAyWGBG8lhHhjKEHnRhZ5FfgVSx
// SIG // z5NMksHEpl3RYRNuKMYa+YaAu99h/EbBJx0kZxJyGiGK
// SIG // r0tkiVBisV39dx898Fd1rL2KQk1AUdEPnAY+Z3/1ZsAD
// SIG // lkR+79BL/W7lmsqxqPJ6Kgox8NpOBpG2iAg16HgcsOmZ
// SIG // zTznL0S6p/TcZL2kAcEgCZN4zfy8wMlEXV4WnAEFTyJN
// SIG // AgMBAAGjggHmMIIB4jAQBgkrBgEEAYI3FQEEAwIBADAd
// SIG // BgNVHQ4EFgQU1WM6XIoxkPNDe3xGG8UzaFqFbVUwGQYJ
// SIG // KwYBBAGCNxQCBAweCgBTAHUAYgBDAEEwCwYDVR0PBAQD
// SIG // AgGGMA8GA1UdEwEB/wQFMAMBAf8wHwYDVR0jBBgwFoAU
// SIG // 1fZWy4/oolxiaNE9lJBb186aGMQwVgYDVR0fBE8wTTBL
// SIG // oEmgR4ZFaHR0cDovL2NybC5taWNyb3NvZnQuY29tL3Br
// SIG // aS9jcmwvcHJvZHVjdHMvTWljUm9vQ2VyQXV0XzIwMTAt
// SIG // MDYtMjMuY3JsMFoGCCsGAQUFBwEBBE4wTDBKBggrBgEF
// SIG // BQcwAoY+aHR0cDovL3d3dy5taWNyb3NvZnQuY29tL3Br
// SIG // aS9jZXJ0cy9NaWNSb29DZXJBdXRfMjAxMC0wNi0yMy5j
// SIG // cnQwgaAGA1UdIAEB/wSBlTCBkjCBjwYJKwYBBAGCNy4D
// SIG // MIGBMD0GCCsGAQUFBwIBFjFodHRwOi8vd3d3Lm1pY3Jv
// SIG // c29mdC5jb20vUEtJL2RvY3MvQ1BTL2RlZmF1bHQuaHRt
// SIG // MEAGCCsGAQUFBwICMDQeMiAdAEwAZQBnAGEAbABfAFAA
// SIG // bwBsAGkAYwB5AF8AUwB0AGEAdABlAG0AZQBuAHQALiAd
// SIG // MA0GCSqGSIb3DQEBCwUAA4ICAQAH5ohRDeLG4Jg/gXED
// SIG // PZ2joSFvs+umzPUxvs8F4qn++ldtGTCzwsVmyWrf9efw
// SIG // eL3HqJ4l4/m87WtUVwgrUYJEEvu5U4zM9GASinbMQEBB
// SIG // m9xcF/9c+V4XNZgkVkt070IQyK+/f8Z/8jd9Wj8c8pl5
// SIG // SpFSAK84Dxf1L3mBZdmptWvkx872ynoAb0swRCQiPM/t
// SIG // A6WWj1kpvLb9BOFwnzJKJ/1Vry/+tuWOM7tiX5rbV0Dp
// SIG // 8c6ZZpCM/2pif93FSguRJuI57BlKcWOdeyFtw5yjojz6
// SIG // f32WapB4pm3S4Zz5Hfw42JT0xqUKloakvZ4argRCg7i1
// SIG // gJsiOCC1JeVk7Pf0v35jWSUPei45V3aicaoGig+JFrph
// SIG // pxHLmtgOR5qAxdDNp9DvfYPw4TtxCd9ddJgiCGHasFAe
// SIG // b73x4QDf5zEHpJM692VHeOj4qEir995yfmFrb3epgcun
// SIG // Caw5u+zGy9iCtHLNHfS4hQEegPsbiSpUObJb2sgNVZl6
// SIG // h3M7COaYLeqN4DMuEin1wC9UJyH3yKxO2ii4sanblrKn
// SIG // QqLJzxlBTeCG+SqaoxFmMNO7dDJL32N79ZmKLxvHIa9Z
// SIG // ta7cRDyXUHHXodLFVeNp3lfB0d4wwP3M5k37Db9dT+md
// SIG // Hhk4L7zPWAUu7w2gUDXa7wknHNWzfjUeCLraNtvTX4/e
// SIG // dIhJEqGCAtIwggI7AgEBMIH8oYHUpIHRMIHOMQswCQYD
// SIG // VQQGEwJVUzETMBEGA1UECBMKV2FzaGluZ3RvbjEQMA4G
// SIG // A1UEBxMHUmVkbW9uZDEeMBwGA1UEChMVTWljcm9zb2Z0
// SIG // IENvcnBvcmF0aW9uMSkwJwYDVQQLEyBNaWNyb3NvZnQg
// SIG // T3BlcmF0aW9ucyBQdWVydG8gUmljbzEmMCQGA1UECxMd
// SIG // VGhhbGVzIFRTUyBFU046MEE1Ni1FMzI5LTRENEQxJTAj
// SIG // BgNVBAMTHE1pY3Jvc29mdCBUaW1lLVN0YW1wIFNlcnZp
// SIG // Y2WiIwoBATAHBgUrDgMCGgMVAAq7QW6mMtK/mBi7VGhV
// SIG // UVv2Ie6moIGDMIGApH4wfDELMAkGA1UEBhMCVVMxEzAR
// SIG // BgNVBAgTCldhc2hpbmd0b24xEDAOBgNVBAcTB1JlZG1v
// SIG // bmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlv
// SIG // bjEmMCQGA1UEAxMdTWljcm9zb2Z0IFRpbWUtU3RhbXAg
// SIG // UENBIDIwMTAwDQYJKoZIhvcNAQEFBQACBQDlNCa3MCIY
// SIG // DzIwMjExMTA5MDI0NDA3WhgPMjAyMTExMTAwMjQ0MDda
// SIG // MHcwPQYKKwYBBAGEWQoEATEvMC0wCgIFAOU0JrcCAQAw
// SIG // CgIBAAICF1ACAf8wBwIBAAICEkAwCgIFAOU1eDcCAQAw
// SIG // NgYKKwYBBAGEWQoEAjEoMCYwDAYKKwYBBAGEWQoDAqAK
// SIG // MAgCAQACAwehIKEKMAgCAQACAwGGoDANBgkqhkiG9w0B
// SIG // AQUFAAOBgQCJBO92Zti3M7eerKIUy8+d8j3RlexcvSmP
// SIG // FFwJjarX81iCYThtMeWhYrL4LW6ZZBow5JHKIUcPUKGJ
// SIG // AP5C3KgStscmXc9aEOvCQiFKLmZgFIkuXcgzOqReFOXQ
// SIG // grnKVkiehZK5vsvzY2nhj/AdA42QvtEpoRrl7EcrA+n7
// SIG // /tY9sDGCAw0wggMJAgEBMIGTMHwxCzAJBgNVBAYTAlVT
// SIG // MRMwEQYDVQQIEwpXYXNoaW5ndG9uMRAwDgYDVQQHEwdS
// SIG // ZWRtb25kMR4wHAYDVQQKExVNaWNyb3NvZnQgQ29ycG9y
// SIG // YXRpb24xJjAkBgNVBAMTHU1pY3Jvc29mdCBUaW1lLVN0
// SIG // YW1wIFBDQSAyMDEwAhMzAAABW3ywujRnN8GnAAAAAAFb
// SIG // MA0GCWCGSAFlAwQCAQUAoIIBSjAaBgkqhkiG9w0BCQMx
// SIG // DQYLKoZIhvcNAQkQAQQwLwYJKoZIhvcNAQkEMSIEIEJ+
// SIG // 6DsrVECb2gw1H3CTx0oCf/E9hmjEd+99zTlisS5rMIH6
// SIG // BgsqhkiG9w0BCRACLzGB6jCB5zCB5DCBvQQgySLgqShj
// SIG // EYeJQhrnBjxwjSe46vTE23t5kNhbUmSwhRkwgZgwgYCk
// SIG // fjB8MQswCQYDVQQGEwJVUzETMBEGA1UECBMKV2FzaGlu
// SIG // Z3RvbjEQMA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UEChMV
// SIG // TWljcm9zb2Z0IENvcnBvcmF0aW9uMSYwJAYDVQQDEx1N
// SIG // aWNyb3NvZnQgVGltZS1TdGFtcCBQQ0EgMjAxMAITMwAA
// SIG // AVt8sLo0ZzfBpwAAAAABWzAiBCC//kbwB5D0BAFAa72b
// SIG // zq0k0OPYtzGz8QUu5Z8NxhZwkjANBgkqhkiG9w0BAQsF
// SIG // AASCAQBFza6LutvNEvCsMfCmSt3altyyRSqOGEUhTZIN
// SIG // 0j7zIrs9fBNpWqO9ivrTmrD0/JNFye2mRpXCiGcUgACD
// SIG // GzF82CtcXLPN+g+Vdkih1lsex+NGcRiuaNkgj0Hccv3Q
// SIG // XxmMxUiveyey157O5NG8Vs0b1LtUMw39+6g5fUkfgSvl
// SIG // a39Iwgcpc8beMkQLKynsUrJ+9Ck5VH7eK+6zPTsl1olv
// SIG // 2UxDYEJLXoz/o7NzH8yFTp8XXXtlhLJi8pVYk/rWObly
// SIG // lUmmiifxyIBe0UOK0o7PSLjNpcKWGS10gCcmZrBaCtqb
// SIG // 9c0apffN/t9N6J1zGenLmBPAXV7112Q/DbtlD7t5
// SIG // End signature block