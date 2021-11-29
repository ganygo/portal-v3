(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function(exports) { 
const valueType={value:''}
const idType={value:'', attr:{schemeID:''}}
const numberValueType={value:0}
const booleanValueType={value:false}
const amountType={ value:0, attr:{ currencyID:''}}
const quantityType={ value:0, attr:{ unitCode:''}}
const measureType={ value:0, attr:{ unitCode:''}}
const codeType={ value:'', attr:{ name:''}}

const countryType={
    identificationCode:valueType,
    name:valueType
}

const periodType={
    startDate:valueType,
    startTime:valueType,
    endDate:valueType,
    endTime:valueType,
    description:valueType,
    durationMeasure:quantityType
}

const partyIdentificationType={ID:{value:'', attr:{schemeID:''}}}

const documentReferenceType={ 
    ID:idType,
    issueDate:valueType,
    documentTypeCode:valueType,
    documentType:valueType,
    documentDescription:[valueType],
    attachment: {
        embeddedDocumentBinaryObject: {
            value:'',
            attr: {
                format: '',
                mimeCode:'application/xml',
                encodingCode: 'Base64',
                characterSetCode: 'UTF-8',
                filename: 'xslt_sablon.xslt'
            }
        }
    },
    validityPeriod: periodType
}

const orderReferenceType={
    ID:idType,
    issueDate:valueType,
    orderTypeCode:valueType,
    salesOrderId:idType,
    documentReference:documentReferenceType
}

const contactType={
    ID:idType,
    name:valueType,
    note:valueType,
    telephone:valueType,
    telefax:valueType,
    electronicMail:valueType,
    otherCommunication:[valueType]
}

const financialAccountType={
    currencyCode:valueType,
    financialInstitutionBranch:{
        financialInstitution:{name:valueType},
        name:valueType
    },
    ID:idType,
    paymentNote:valueType
}


const personType={
    firstName:valueType,
    middleName:valueType,
    familyName:valueType,
    nameSuffix:valueType,
    title:valueType,
    financialAccount:financialAccountType,
    identityDocumentReference:documentReferenceType,
    nationalityId:idType
}

const addressType={
    room:valueType,
    streetName:valueType,
    blockName:valueType,
    buildingName:valueType,
    buildingNumber:valueType,
    citySubdivisionName:valueType,
    cityName:valueType,
    postalZone:valueType,
    postbox:valueType,
    region:valueType,
    district:valueType,
    country:countryType
}

const partyType={
    websiteURI:valueType,
    partyIdentification:[partyIdentificationType],
    partyName:{name:valueType},
    postalAddress:addressType,
    partyTaxScheme:{
        taxScheme:{
            name:valueType,
            taxTypeCode:valueType
        }
    },
    contact:contactType,
    person: personType
}

const exchangeRateType={ 
    sourceCurrencyCode  :valueType,
    targetCurrencyCode  :valueType,
    calculationRate   :numberValueType,
    date   :valueType
}

const actualPackageType={
    ID:idType,
    quantity:quantityType,
    packagingTypeCode:valueType
}

const dimensionType={
    attributeId:idType,
    description:[valueType],
    measure:quantityType,
    minimumMeasure:quantityType,
    maximumMeasure:quantityType
}

const itemPropertyType={
    ID:idType,
    importanceCode:valueType,
    itemPropertyGroup:[{
        ID:idType,
        importanceCode:valueType,
        name:valueType
    }],
    name:valueType,
    nameCode:valueType,
    rangeDimension:dimensionType,
    value: valueType,
    valueQuantity: quantityType,
    valueQualifier:[valueType],
    usabilityPeriod:periodType
}

const itemInstanceType={
    additionalItemProperty:[itemPropertyType],
    serialId:idType,
    lotIdentification:{ 
        lotNumberId: idType,
        expiryDate: valueType,
        additionalItemProperty:[itemPropertyType]
    },
    manufactureDate:valueType,
    manufactureTime:valueType,
    productTraceId:idType,
    registrationId:idType
}

const itemType={
    itemType:'',
    name:valueType,
    description:valueType,
    additionalItemIdentification:[{ID:idType}],
    brandName:valueType,
    buyersItemIdentification:{ID:idType},
    commodityClassification:[
        {
            itemClassificationCode:valueType
        }
    ],
    keyword:valueType,
    manufacturersItemIdentification:{ID:idType},
    modelName:valueType,
    sellersItemIdentification:{ID:idType},
    originCountry:countryType,
    itemInstance:[itemInstanceType],
    images:[{ data: '', type: '', fileName: '' },{ data: '', type: '', fileName: '' },{ data: '', type: '', fileName: '' }],
    files:[{ data: '', type: '', fileName: '' },{ data: '', type: '', fileName: '' },{ data: '', type: '', fileName: '' }],
    packingTypes:[],
    localDocumentId:'',
    passive:false
    
}

const paymentTermsType={
    amount :amountType,
    note:valueType,
    paymentDueDate:valueType,
    penaltyAmount :amountType,
    penaltySurchargePercent :numberValueType,
    settlementPeriod:periodType
}

const paymentMeansType={
    instructionNote:valueType,
    paymentMeansCode:codeType,
    paymentChannelCode:codeType,
    paymentDueDate:valueType,
    payerFinancialAccount:financialAccountType,
    payeeFinancialAccount:financialAccountType
}

const taxTotalType ={
    taxAmount :amountType,
    taxSubtotal:[{
        taxableAmount:amountType,
        taxAmount :amountType,
        percent :numberValueType,
        calculationSequenceNumeric :numberValueType,
        taxCategory :{
            name:valueType,
            taxScheme:{
                ID:idType,
                name:valueType,
                taxTypeCode:valueType
            },
            taxExemptionReason:valueType,
            taxExemptionReasonCode:valueType
        }
    }]
}

const allowanceChargeType={
    sequenceNumeric: numberValueType,
    allowanceChargeReason: valueType,
    amount: amountType,
    baseAmount: amountType,
    chargeIndicator:booleanValueType,
    multiplierFactorNumeric: numberValueType,
    perUnitAmount: amountType
}

const lineReferencetype={
    documentReference:documentReferenceType,
    lineId:idType,
    lineStatusCode:valueType
}

const orderLineReferenceType={
    lineId:idType,
    lineStatusCode:valueType,
    salesOrderLineId:idType,
    uuid:valueType,
    orderReference:{
        ID:idType,
        documentReference: documentReferenceType, 
        issueDate:valueType,
        orderTypeCode:valueType,
        salesOrderId:idType
    }
}

const orderLineReferenceType2={
    lineId:idType,
    orderedQuantity:quantityType,
    producedQuantity:quantityType,
    deliveredQuantity:quantityType,
    orderReference:{
        order:'',
        ID:idType,
        issueDate:valueType,
        orderTypeCode:valueType,
        salesOrderId:idType,
        buyerCustomerParty:{
            party:partyType,
            deliveryContact:contactType,
            accountingContact:contactType,
            buyerContact:contactType
        }
    }
}

const locationType={
    ID:idType,
    address:addressType
}

const deliveryTermsType={
    amount : amountType,
    ID:{ 
        value:'',
        attr:{ schemeID :'INCOTERMS'}
    },
    specialTerms:valueType
}

const despatchType={
    ID:idType,
    actualDespatchDate:valueType,
    actualDespatchTime:valueType,
    contact:contactType,
    despatchAddress:addressType,
    despatchParty:partyType,
    estimatedDespatchPeriod:periodType,
    instructions:valueType
}


const temperatureType={
    attributeId:valueType,
    description:[valueType],
    measure:measureType
}

const goodsItemType={
    ID:idType, //*** ihracatta zorunlu alan
    requiredCustomsId:idType, //*** ihracatta zorunlu alan
    chargeableQuantity:quantityType,
    chargeableWeightMeasure:measureType,
    customsImportClassifiedIndicator:booleanValueType,
    customsStatusCode:codeType,
    customsTariffQuantity:quantityType,
    declaredCustomsValueAmount:amountType,
    declaredForCarriageValueAmount:amountType,
    declaredStatisticsValueAmount:amountType,
    description:valueType,
    freeOnBoardValueAmount:amountType,
    freightAllowanceCharge:[allowanceChargeType],
    grossVolumeMeasure:measureType,
    grossWeightMeasure:measureType,
    hazardousRiskIndicator:booleanValueType,
    insuranceValueAmount:amountType,
    invoiceLine:[],
    item:[itemType],
    measurementDimension:[dimensionType],
    NetVolumeMeasure:measureType,
    NetWeightMeasure:measureType,
    OriginAddress:addressType,
    quantity:quantityType,
    returnableQuantity:quantityType,
    temperature:[temperatureType],
    traceId:idType,
    valueAmount:amountType
}

const customsDeclarationType={
    ID:idType,
    issuerParty:partyType
}

const hazardousGoodsTransitType={
    hazardousRegulationCode:codeType,
    inhalationToxicityZoneCode:codeType,
    maximumTemperature:temperatureType,
    minimumTemperature:temperatureType,
    packingCriteriaCode:codeType,
    transportAuthorizationCode:codeType,
    transportEmergencyCardCode:codeType

}

const transportEquipmentType={
    ID:idType,
    description:valueType,
    transportEquipmentTypeCode:codeType
}

const maritimeTransportType={
    grossTonnageMeasure:measureType,
    netTonnageMeasure:measureType,
    radioCallSignId:idType,
    registryCertificateDocumentReference:documentReferenceType,
    registryPortLocation:locationType,
    shipsRequirements:[valueType],
    vesselId:idType,
    vesselName:valueType
}

const railTransportType={
    railCarId:idType,
    trainId:idType
}

const roadTransportType={
    licensePlateId:idType,
    LocationId:idType
}

const stowageType={
    location:[locationType],
    locationId:idType,
    measurementDimension:[dimensionType]
}

const transportMeansType={
    airTransport:{
        aircraftId:idType
    },
    directionCode:codeType,
    journeyId:idType,
    maritimeTransport:maritimeTransportType,
    measurementDimension:[dimensionType],
    ownerParty:partyType,
    railTransport:railTransportType,
    registrationNationality:[valueType],
    registrationNationalityId:idType,
    roadTransport:roadTransportType,
    stowage:stowageType,
    tradeServiceCode:codeType,
    transportMeansTypeCode:codeType
}

const transportHandlingUnitType={
    ID:idType,
    actualPackage:[{ //*** ihracatta zorunlu alan
        ID:idType, //*** ihracatta zorunlu alan
        quantity:quantityType, //*** ihracatta zorunlu alan
        packagingTypeCode:codeType //*** ihracatta zorunlu alan
    }],
    customsDeclaration:[customsDeclarationType],
    floorSpaceMeasurementDimension:dimensionType,
    minimumTemperature:temperatureType,
    maximumTemperature:temperatureType,
    damageRemarks:[valueType],
    handlingCode:codeType,
    handlingInstructions:valueType,
    hazardousGoodsTransit:[hazardousGoodsTransitType],
    measurementDimension:[dimensionType],
    palletSpaceMeasurementDimension:dimensionType,
    shipmentDocumentReference:[documentReferenceType],
    TotalGoodsItemQuantity:quantityType,
    TotalPackageQuantity:quantityType,
    traceId:idType,
    transportEquipment:[transportEquipmentType],
    transportHandlingUnitTypeCode:codeType,
    transportMeans:[transportMeansType]
}

const shipmentStageType={
    driverPerson:[personType],
    transportModeCode:codeType,
    transportMeans:{roadTransport:{licensePlateId:valueType}}
}


const deliveryType={
    ID:idType,
    quantity:quantityType,
    actualDeliveryDate:valueType,
    actualDeliveryTime:valueType,
    latestDeliveryDate:valueType,
    latestDeliveryTime:valueType,
    trackingId:valueType,
    deliveryAddress:addressType,
    alternativeDeliveryLocation:locationType,
    estimatedDeliveryPeriod:periodType,
    carrierParty:partyType,
    deliveryParty:partyType,
    despatch:{},
    deliveryTerms:[],
    shipment:{}
}


const shipmentType={
    ID:idType,
    declaredCustomsValueAmount : amountType,
    declaredForCarriageValueAmount : amountType,
    declaredStatisticsValueAmount : amountType,
    delivery:{},
    firstArrivalPortLocation:locationType,
    freeOnBoardValueAmount : amountType,
    goodsItem:[goodsItemType],
    grossVolumeMeasure:quantityType,
    grossWeightMeasure:quantityType,
    handlingCode:valueType,
    handlingInstructions:valueType,
    insuranceValueAmount : amountType,
    lastExitPortLocation:locationType,
    netVolumeMeasure:quantityType,
    netWeightMeasure:quantityType,
    returnAddress:addressType,
    shipmentStage:[shipmentStageType], 
    specialInstructions:[valueType],
    totalGoodsItemQuantity:quantityType,
    totalTransportHandlingUnitQuantity:quantityType,
    transportHandlingUnit:[transportHandlingUnitType] 
}


const invoiceLineType={
    ID:idType,
    note:[valueType],
    invoicedQuantity : quantityType,
    price : {
        priceAmount:amountType
    },
    lineExtensionAmount: amountType,
    orderLineReference:[orderLineReferenceType],
    item:itemType,
    receiptLineReference:[lineReferencetype],
    allowanceCharge:[allowanceChargeType],
    delivery:[deliveryType],
    despatchLineReference:[lineReferencetype],
    taxTotal:taxTotalType,
    withholdingTaxTotal:[taxTotalType],
    subInvoiceLine:[{}]
}

const orderLineType={
    ID:idType,
    salesOrderLineId:idType,
    note:[valueType],
    orderedQuantity:quantityType,
    producedQuantity:quantityType,
    deliveredQuantity:quantityType,
    price : {
        priceAmount:amountType
    },
    lineExtensionAmount: amountType,
    item:itemType,
    allowanceCharge:[allowanceChargeType],
    delivery:[deliveryType],
    taxTotal:taxTotalType,
    withholdingTaxTotal:[taxTotalType],
    subOrderLine:[{}]
}

const billingReferenceLineType={
    ID: idType,
    amount:amountType,
    allowanceCharge:[allowanceChargeType]
}
const billingReferenceType={
    additionalDocumentReference:documentReferenceType,
    billingReferenceLine:[billingReferenceLineType],
    debitNoteDocumentReference:documentReferenceType,
    creditNoteDocumentReference:documentReferenceType,
    invoiceDocumentReference:documentReferenceType,
    reminderDocumentReference:documentReferenceType,
    selfBilledCreditNoteDocumentReference:documentReferenceType,
    selfBilledInvoiceDocumentReference:documentReferenceType


}

const despatchLineType={
    ID:idType,
    item:itemType,
    note:[valueType],
    deliveredQuantity:quantityType,
    documentReference:[documentReferenceType],
    orderLineReference:orderLineReferenceType,
    outstandingQuantity:quantityType,
    outstandingReason:[valueType],
    oversupplyQuantity:quantityType,
    shipment:[shipmentType]
}

const receiptLineType={
    ID:idType,
    item:itemType,
    note:[valueType],
    receivedDate:valueType,
    despatchLineReference:lineReferencetype,
    receivedQuantity:quantityType,
    rejectedQuantity:quantityType,
    rejectReason:[valueType],
    rejectReasonCode:codeType,
    shortQuantity:quantityType,
    documentReference:[documentReferenceType],
    orderLineReference:orderLineReferenceType,
    oversupplyQuantity:quantityType,
    timingComplaint:valueType,
    timingComplaintCode:codeType,
    shipment:[shipmentType]
}

const transactionConditionsType={
    ID:idType,
    actionCode:codeType,
    description:[valueType],
    documentReference:[documentReferenceType]
}

const invoiceType={
    ioType : 0, // 0 - cikis , 1- giris
    eIntegrator: '',
    location:'',
    profileId: valueType,
    ID: valueType,
    uuid: valueType,
    issueDate:valueType,
    issueTime:valueType,
    invoiceTypeCode: valueType,
    invoicePeriod: periodType,
    note:[valueType],
    documentCurrencyCode:valueType,
    taxCurrencyCode:valueType,
    pricingCurrencyCode:valueType,
    paymentCurrencyCode:valueType,
    paymentAlternativeCurrencyCode:valueType,
    lineCountNumeric:numberValueType,
    additionalDocumentReference:[documentReferenceType],
    orderReference:[orderReferenceType],
    despatchDocumentReference:[documentReferenceType],
    originatorDocumentReference:[documentReferenceType],
    accountingSupplierParty:{
        party:partyType,
        despatchContact:contactType
    },
    accountingCustomerParty:{
        party:partyType,
        deliveryContact:contactType
    },
    sellerSupplierParty:{
        party:partyType,
        despatchContact:contactType
    },
    buyerCustomerParty:{
        party:partyType,
        deliveryContact:contactType
    },
    accountingCost:valueType,
    delivery:[],
    billingReference:[],
    contractDocumentReference:[],
    paymentTerms:paymentTermsType,
    paymentMeans:[],
    taxExchangeRate:exchangeRateType,
    pricingExchangeRate:exchangeRateType,
    paymentExchangeRate:exchangeRateType,
    paymentAlternativeExchangeRate:exchangeRateType,
    taxTotal:[],
    withholdingTaxTotal:[],
    allowanceCharge:[],
    legalMonetaryTotal: { 
        lineExtensionAmount  :amountType,
        taxExclusiveAmount  : amountType,
        taxInclusiveAmount   : amountType,
        allowanceTotalAmount   : amountType,
        chargeTotalAmount : amountType,
        payableRoundingAmount : amountType,
        payableAmount :amountType
    },
    invoiceLine:[],
    localDocumentId:''
}

const orderType={
    //ioType : 0, // 0 - cikis , 1- giris
    eIntegrator: '',
    profileId: valueType,
    ID: valueType,
    salesOrderId:valueType,
    uuid: valueType,
    issueDate: valueType,
    issueTime: valueType,
    orderTypeCode: valueType,
    note:[valueType],
    requestedInvoiceCurrencyCode:valueType,
    documentCurrencyCode:valueType,
    pricingCurrencyCode:valueType,
    taxCurrencyCode:valueType,
    customerReference:valueType,
    accountingCostCode:valueType,
    accountingCost:valueType,
    lineCountNumeric:numberValueType,
    validityPeriod: periodType,
    quotationDocumentReference:[],
    orderDocumentReference:[],
    originatorDocumentReference:[],
    catalogueReference:[],
    additionalDocumentReference:[],
    contract:[],
    projectReference:[],
    sellerSupplierParty:{
        customerAssignedAccountId:idType,
        additionalAccountId:idType,
        dataSendingCapability:valueType,
        party:partyType,
        despatchContact:contactType,
        accountingContact:contactType,
        sellerContact:contactType
    },
    buyerCustomerParty:{
        customerAssignedAccountId:idType,
        supplierAssignedAccountId:idType,
        additionalAccountId:idType,
        party:partyType,
        deliveryContact:contactType,
        accountingContact:contactType,
        buyerContact:contactType
    },
    accountingCost:valueType,
    delivery:[],
    billingReference:[],
    contractDocumentReference:[],
    paymentTerms:paymentTermsType,
    paymentMeans:[],
    taxExchangeRate:exchangeRateType,
    pricingExchangeRate:exchangeRateType,
    paymentExchangeRate:exchangeRateType,
    paymentAlternativeExchangeRate:exchangeRateType,
    taxTotal:[],
    withholdingTaxTotal:[],
    allowanceCharge:[],
    anticipatedMonetaryTotal: { 
        lineExtensionAmount  :amountType,
        taxExclusiveAmount  : amountType,
        taxInclusiveAmount   : amountType,
        allowanceTotalAmount   : amountType,
        chargeTotalAmount : amountType,
        payableRoundingAmount : amountType,
        payableAmount :amountType,
        payableAlternativeAmount :amountType
    },
    orderLine:[],
    localDocumentId:''
}

const qualityControlType={
        param:'',
        value:''
    }
const materialType={
        item:'',
        quantity:0,
        unitCode:''
    }
const recipeProcessType={
    sequence:0,
    station: '',
    step: '',
    machines: [],
    input: [],  //materialType
    output: [], //materialType
    parameters:''
}
const productionOrderType={
    item: '',
    sourceRecipe: '',
    productionTypeCode:'MUSTERI',
    productionId:'',
    issueDate: '',
    issueTime: '',
    plannedPeriod: {
        startDate: '',
        startTime: '',
        endDate: '',
        endTime: ''
    },
    producedPeriod: {
        startDate: '',
        startTime: '',
        endDate: '',
        endTime: ''
    },
    plannedQuantity:0,
    producedQuantity:0,
    unitCode:'',
    orderLineReference:[],
    description:'',
    process:[],
    materialSummary:[], //materialType
    outputSummary:[], //materialType
    qualityControl:[], //qualityControlType
    finishNotes:'',
    packingOption:{
        palletType:'',
        packingType:'',
        quantityInPacking:0,
        palletRowCount:0,
        packingCountInRow:0,
        unitCode:'',
        packingType2:'',
        packingType3:''
    },
    totalPallet:0,
    totalPacking:0,
    totalWeight:0,
    status:'Draft',
    cancelled: false
}

const recipeType={
    item: '',
    name:'',
    description:'',
    revision:1,
    process:[], //recipeProcessType
    materialSummary:[], //materialType
    outputSummary:[],  //materialType
    qualityControl:[], //qualityControlType
    isDefault: true,
    totalQuantity:100,
    totalWeight:100,
    passive: false
    
}

const despatchAdviceType={
    eIntegrator: '',
    location:'',
    location2:'',
    profileId: valueType,
    ID: idType,
    uuid: valueType,
    issueDate: valueType,
    issueTime: valueType,
    despatchAdviceTypeCode: valueType,
    despatchPeriod: periodType,
    note:[valueType],
    additionalDocumentReference:[], //documentReferenceType
    orderReference:[], //orderReferenceType
    originatorDocumentReference:[], //documentReferenceType
    despatchSupplierParty:{
        party:partyType,
        despatchContact:contactType
    },
    deliveryCustomerParty:{
        party:partyType,
        deliveryContact:contactType
    },
    originatorCustomerParty:{
        party:partyType,
        deliveryContact:contactType
    },
    sellerSupplierParty:{
        party:partyType,
        despatchContact:contactType
    },
    buyerCustomerParty:{
        party:partyType,
        deliveryContact:contactType
    },
    shipment:shipmentType,
    lineCountNumeric:numberValueType,
    despatchLine:[], //despatchLineType
    localDocumentId: '',
    receiptAdvice:''
}


const receiptAdviceType={
	ioType:1,
	despatch:'',
    eIntegrator: '',
    profileId: valueType,
    ID: idType,
    uuid: valueType,
    issueDate: valueType,
    issueTime: valueType,
    receiptAdviceTypeCode: valueType,
    note:[valueType],
    despatchDocumentReference:documentReferenceType,
    additionalDocumentReference:[], //documentReferenceType
    orderReference:[], //orderReferenceType
    originatorDocumentReference:[], //documentReferenceType
    despatchSupplierParty:{
        party:partyType,
        despatchContact:contactType
    },
    deliveryCustomerParty:{
        party:partyType,
        deliveryContact:contactType
    },
    originatorCustomerParty:{
        party:partyType,
        deliveryContact:contactType
    },
    sellerSupplierParty:{
        party:partyType,
        despatchContact:contactType
    },
    buyerCustomerParty:{
        party:partyType,
        deliveryContact:contactType
    },
    shipment:shipmentType,
    lineCountNumeric:numberValueType,
    receiptLine:[], //receiptLineType
    localDocumentId: ''
}



const receiptAdviceInfoType={
	despatch:'', //connected despatch
    receiptAdviceNumber:idType,
    localDocumentId:'',
    inboxDespatchId:valueType,
    note:valueType,
    deliveryContactName:valueType, 
    despatchContactName:valueType, 
    actualDeliveryDate:valueType, 
    receiptAdviceLineInfos:[] //receiptAdviceLineInfoType
}


const receiptAdviceLineInfoType={
	lineId:idType,
    timingComplaint:valueType,
    receivedQuantity:numberValueType,
    rejectedQuantity:numberValueType,
    rejectReason:valueType,
    rejectReasonCode:valueType,
    shortQuantity:numberValueType,
    oversupplyQuantity:numberValueType
}

exports.types = Object.freeze({
    valueType:valueType,
    idType:idType,
    numberValueType:numberValueType,
    amountType:amountType,
    quantityType:quantityType,
    codeType:codeType,
    measureType:measureType,
    countryType:countryType,
    partyIdentificationType:partyIdentificationType,
    partyType:partyType,
    exchangeRateType:exchangeRateType,
    actualPackageType:actualPackageType,
    dimensionType:dimensionType,
    itemPropertyType:itemPropertyType,
    itemInstanceType:itemInstanceType,
    documentReferenceType:documentReferenceType,
    orderReferenceType:orderReferenceType,
    contactType:contactType,
    personType:personType,
    itemType:itemType,
    paymentTermsType:paymentTermsType,
    paymentMeansType:paymentMeansType,
    exchangeRateType:exchangeRateType,
    taxTotalType:taxTotalType,
    financialAccountType:financialAccountType,
    allowanceChargeType:allowanceChargeType,
    periodType:periodType,
    lineReferencetype:lineReferencetype,
    orderLineReferenceType:orderLineReferenceType,
    deliveryType:deliveryType,
    addressType:addressType,
    locationType:locationType,
    despatchType:despatchType,
    shipmentType:shipmentType,
    customsDeclarationType:customsDeclarationType,
    transportHandlingUnitType:transportHandlingUnitType,
    dimensionType:dimensionType,
    temperatureType:temperatureType,
    hazardousGoodsTransitType:hazardousGoodsTransitType,
    transportEquipmentType:transportEquipmentType,
    transportMeansType:transportMeansType,
    maritimeTransportType:maritimeTransportType,
    railTransportType:railTransportType,
    roadTransportType:roadTransportType,
    stowageType:stowageType,
    invoiceLineType:invoiceLineType,
    shipmentStageType:shipmentStageType,
    billingReferenceType:billingReferenceType,
    billingReferenceLineType:billingReferenceLineType,
    despatchLineType:despatchLineType,
    receiptLineType:receiptLineType,
    orderLineType:orderLineType,
    transactionConditionsType:transactionConditionsType,
    deliveryTermsType:deliveryTermsType,
    invoiceType:invoiceType,
    orderType:orderType,
    productionOrderType:productionOrderType,
    recipeType:recipeType,
    recipeProcessType:recipeProcessType,
    materialType:materialType,
    qualityControlType:qualityControlType,
    despatchAdviceType:despatchAdviceType,
    receiptAdviceType:receiptAdviceType
});

       
})(typeof exports === 'undefined'?  
            this['types']={}: exports); 


},{}],2:[function(require,module,exports){
function frm_Card(parentId, item, cb) {
	//	<a class="btn btn-collapse ${item.collapsed?'collapsed':''}" data-bs-toggle="collapse" data-bs-target="#cardCollapse${item.id}" aria-expanded="${!item.collapsed?'false':'true'}" aria-fields="cardCollapse${item.id}" href="#"><i class="far fa-caret-square-up fa-2x"></i></a>

	let s = `
	<div class="${item.col || ''} p-1 pb-1 ${item.visible===false?'hidden':''}">
	<div class="card cerceve1 ${item.level>1?'child':'mother'} ${item.class || ''}" level="${item.level || ''}" data-type="${item.dataType}" data-field="${item.field || ''}" >
		<div class="card-header${item.showHeader===false?'d-none':''}"  >
			<span class="hand-pointer" data-bs-toggle="collapse" data-bs-target="#cardCollapse${item.id}" aria-expanded="${!item.collapsed?'false':'true'}" aria-fields="cardCollapse${item.id}">
			<a class="btn btn-collapse ${item.collapsed?'collapsed':''}" data-bs-toggle="collapse" data-bs-target="#cardCollapse${item.id}" aria-expanded="${!item.collapsed?'false':'true'}" aria-fields="cardCollapse${item.id}" ><i class="fas fa-caret-up fa-2x"></i></a>	
			${item.text}${helpButton(item)}
			</span>
		</div>
		<div  id="cardCollapse${item.id}" class="card-body  card-collapse collapse p-2 pt-0 ${item.collapsed?'collapsed':'show'}">
			<div class="row" id="${item.id}">
			${item.html || item.controls || ''}
			</div>
		</div>
	</div>
	</div>
	`


	document.querySelector(parentId).insertAdjacentHTML('beforeend', htmlEval(s))

	cb()
}

function frm_Tab(parentId, item, cb) {
	let bActive = false
	item.tabs.forEach((tab) => {
		if(tab.active === true) {
			bActive = true
			return
		}
	})
	if(!bActive && item.tabs.length > 0) {
		item.tabs[0].active = true
	}

	let s = `
	<div class="col-12">
	<ul class="nav nav-tabs" role="tablist" level="${item.level}">`
	item.tabs.forEach((tab, tabIndex) => {
		s += `<li class="nav-item">
		<a class="nav-link ${tab.active?'active':''}" href="#formTab${item.id}${tabIndex}" role="tab" data-bs-toggle="tab" id="IDformTab${item.id}${tabIndex}" aria-controls="formTab${item.id}${tabIndex}" aria-selected="${tab.active?'true':'false'}">
		${tab.icon?'<i class="' + tab.icon + '"></i>':''} ${tab.text || ''}
		</a>
		</li>`
	})
	s += `</ul>
	<div class="tab-content" style="min-height: 60vh;overflow: auto;">`
	item.tabs.forEach((tab, tabIndex) => {
		s += `<div class="tab-pane ${tab.active?'show active':''}" id="formTab${item.id}${tabIndex}" role="tabpanel" aria-labelledby="IDformTab${item.id}${tabIndex}">
		<div class="row" id="${tab.id}" >
		</div>
		</div>`
	})
	s += `</div>
	</div>
	`
	document.querySelector(parentId).insertAdjacentHTML('beforeend', htmlEval(s))
	cb()
}

function frm_Group(input, item) {
	if(item.noGroup === true) {
		return input
	} else {
		return `
		<div class="${item.col || 'col-12'} p-1">
		<div class="g-input  ${item.visible===false?'hidden':''}">
		${input}
		<label for="${item.id}" class="">${itemLabelCaption(item)}${helpButton(item)}</label>
		
		</div>
		</div>
		`
	}

	// ps-0 ps-md-1 pb-0 pb-md-3 
}

function frm_FormHtml(parentId, item, cb) {
	let html = ''
	if(item.html) {
		html = replaceUrlCurlyBracket(item.html, item) || ''
	} else {
		html = item.value
	}

	let s = frm_Group(html, item)

	document.querySelector(parentId).insertAdjacentHTML('beforeend', htmlEval(s))
	cb()
}

function frm_Label(parentId, item, cb) {

	let s = frm_Group(`<label level="${item.level || ''}" data-type="${item.dataType}" data-field="${item.field || ''}"  id="${item.id}" class="m-0 p-0 ${item.class || ''}" title="${item.title || item.text || ''}">${itemLabelCaption(item, (item.value || item.text || ''))}</label>`, item)

	document.querySelector(parentId).insertAdjacentHTML('beforeend', htmlEval(s))

	if(item.id && item.value)
		$(`${parentId} #${item.id}`).val(item.value)

	cb()
}

function frm_TextBox(parentId, item, cb) {
	let s = frm_Group(`<input type="text" level="${item.level || ''}" data-type="${item.dataType}" data-field="${item.field || ''}"  class="form-control ${item.class || ''}" id="${item.id}" name="${item.name}" placeholder="${item.placeholder || ' '}" title="${item.title || item.text || ''}" ${item.required?'required="required"':''} ${item.readonly==true?'readonly':''} onchange="${item.onchange || ''}" autocomplete="off_${moment().format('YYYYMMDDHHmmss')}" value="${item.value!=undefined?item.value:''}">`, item)

	document.querySelector(parentId).insertAdjacentHTML('beforeend', htmlEval(s))

	$(`${parentId} #${item.id}`).val(item.value != undefined ? item.value : '')

	cb()
}

function frm_InputHidden(parentId, item, cb) {

	let s = `<input type="hidden" id="${item.id}" level="${item.level || ''}" data-type="${item.dataType}" data-field="${item.field || ''}"   name="${item.name}" onchange="${item.onchange || ''}" value="${item.value!=undefined?item.value:''}">`

	document.querySelector(parentId).insertAdjacentHTML('beforeend', htmlEval(s))

	$(`${parentId} #${item.id}`).val(item.value != undefined ? item.value : '')
	cb()
}

function frm_Button(parentId, item, cb) {
	let label = `${item.text || ''}`
	let titleText = `${item.title || item.text || ''}`
	if(item.icon) {
		label = `<i class="${item.icon}"></i> ${label}`
	}


	let s = `<a class="${item.class || 'btn btn-info'}" level="${item.level || ''}" data-type="${item.dataType}" data-field="${item.field || ''}"   id="${item.id || ''}" href="${item.href || (item.value || '')}" target="${item.target || ''}" title="${titleText.replaceAll('"','\'')}">${label}</a>`

	if(item.noGroup !== true) {
		s = `<div class="${item.col || 'col-12'} p-1 ${item.visible===false?'hidden':''}">
		${s}
		</div>
		`
	}

	document.querySelector(parentId).insertAdjacentHTML('beforeend', htmlEval(s))
	cb()
}

function frm_TextareaBox(parentId, item, cb) {

	let s = `
	<textarea level="${item.level || ''}" data-type="${item.dataType}" data-field="${item.field || ''}"   class="form-control text-nowrap ${item.class || ''}"  style="font-family: courier new"  id="${item.id}-textarea" rows="${item.rows || 4}"  placeholder="${item.placeholder || ' '}" title="${item.title || item.text || ''}" ${item.required?'required="required"':''} ${item.readonly==true?'readonly':''} onchange="${item.onchange || ''}" autocomplete="off_${moment().format('YYYYMMDDHHmmss')}" spellcheck="false"></textarea>
	<input type="hidden" level="${item.level || ''}" data-type="${item.dataType}" data-field="${item.field || ''}"   id="${item.id}" name="${item.name}" >
	`

	s = frm_Group(s, item)
	document.querySelector(parentId).insertAdjacentHTML('beforeend', htmlEval(s))

	let textAreaValue = item.value != undefined ? item.value : ''
	if(item.encoding == 'base64') {
		textAreaValue = b64DecodeUnicode(item.value != undefined ? item.value : '')
	}

	$(`${parentId} #${item.id}-textarea`).val(textAreaValue)
	$(`${parentId} #${item.id}`).val(item.value != undefined ? item.value : '')

	$(`${parentId} #${item.id}-textarea`).change(() => {
		if(item.encoding == 'base64') {
			$(`${parentId} #${item.id}`).val(b64EncodeUnicode($(`${parentId} #${item.id}-textarea`).val()))
		} else {
			$(`${parentId} #${item.id}`).val($(`${parentId} #${item.id}-textarea`).val())
		}
	})

	cb()
}

function frm_ImageBox(parentId, item, cb) {
	let s = `
	<div>
	<label for="fileUpload_${item.id}" class="btn btn-primary btn-image-edit" title="${item.title || item.text || ''}"><i class="fas fa-edit"></i></label>
	<img id="${item.id}-img" class="imageBox-img" src="${item.value.data || '/img/placehold-place.jpg'}" download="${item.value.fileName || ''}">
	</div>
	<input type="file" id="fileUpload_${item.id}" style="display:none;" accept="" >
	<input type="hidden" name="${item.name}[data]" value="${item.value.data || ''}" >
	<input type="hidden" name="${item.name}[type]" value="${item.value.type || ''}" >
	<input type="hidden" name="${item.name}[fileName]" value="${item.value.fileName || ''}" >
	
	`

	s = frm_Group(s, item)

	document.querySelector(parentId).insertAdjacentHTML('beforeend', htmlEval(s))

	$(`${parentId} #fileUpload_${item.id}`).change(() => {
		let files = $(`${parentId} #fileUpload_${item.id}`).prop('files')
		if(files.length > 0) {
			let file = files[0]
			$(`${parentId} #${item.id}-img`).attr(`download`, file.name)

			let reader = new FileReader()
			reader.addEventListener("load", function() {
				$(`${parentId} #${item.id}-img`).attr('src', reader.result)
				$(`${parentId} input[name="${item.name}[data]"]`).val(reader.result)
				$(`${parentId} input[name="${item.name}[type]"]`).val(file.type)
				$(`${parentId} input[name="${item.name}[fileName]"]`).val(file.name)
			}, false)
			if(file) {
				reader.readAsDataURL(file)
			}
		}
	})

	cb()
}

function frm_FileBox(parentId, item, cb) {
	let s = `
	<div>
	<label for="fileUpload_${item.id}" class="btn btn-primary" title="${item.title || item.text || ''}"><i class="fas fa-file-alt"></i> Dosya seçiniz</label><br>
	<a id="fileDownload_${item.id}" class="" href="${item.value.data || '#'}" download="${item.value.fileName || ''}">${item.value.fileName?'<i class="fas fa-file-download"></i> ' + item.value.fileName:''}</a>
	</div>
	<input type="file" id="fileUpload_${item.id}" style="display:none;" accept="" >
	<input type="hidden" name="${item.name}[data]" value="${item.value.data || ''}" >
	<input type="hidden" name="${item.name}[type]" value="${item.value.type || ''}" >
	<input type="hidden" name="${item.name}[fileName]" value="${item.value.fileName || ''}" >
	
	`
	s = frm_Group(s, item)

	document.querySelector(parentId).insertAdjacentHTML('beforeend', htmlEval(s))

	$(`${parentId} #fileUpload_${item.id}`).change(() => {
		let files = $(`${parentId} #fileUpload_${item.id}`).prop('files')
		if(files.length > 0) {
			let file = files[0]
			$(`${parentId} #${item.id}-img`).attr(`download`, file.name)

			let reader = new FileReader()
			reader.addEventListener("load", function() {
				$(`${parentId} #fileDownload_${item.id}`).attr('href', reader.result)
				$(`${parentId} #fileDownload_${item.id}`).attr('download', file.name)
				$(`${parentId} #fileDownload_${item.id}`).html(`<i class="fas fa-file-download"></i> ${file.name}`)

				$(`${parentId} input[name="${item.name}[data]"]`).val(reader.result)
				$(`${parentId} input[name="${item.name}[type]"]`).val(file.type)
				$(`${parentId} input[name="${item.name}[fileName]"]`).val(file.name)
			}, false)
			if(file) {
				reader.readAsDataURL(file)
			}
		}
	})

	cb()
}

function frm_NumberBox(parentId, item, cb) {
	let s = frm_Group(`<input type="number" level="${item.level || ''}" data-type="${item.dataType}" data-field="${item.field || ''}"  class="form-control text-end ${item.class || ''} text-end" id="${item.id}" name="${item.name}" placeholder="${item.placeholder || ' '}" title="${item.title || item.text || ''}" ${item.required?'required="required"':''} ${item.readonly==true?'readonly':''} onchange="${item.onchange || ''}" autocomplete="off_${moment().format('YYYYMMDDHHmmss')}" value="${item.value!=undefined?item.value:0}">`, item)
	document.querySelector(parentId).insertAdjacentHTML('beforeend', htmlEval(s))
	cb()
}

function frm_FormattedNumberBox(parentId, item, cb) {

	switch (item.dataType) {
		case 'amount':
			frm_AmountBox(parentId, item, cb)
			break
		case 'price':
			frm_PriceBox(parentId, item, cb)
			break
		case 'quantity':
			frm_QuantityBox(parentId, item, cb)
			break
		default:
			frm_MoneyBox(parentId, item, cb)
			break
	}
}

function frm_MoneyBox(parentId, item, cb, cssId = 'frm-moneybox') {
	item.round = item.round || 2
	let input = `<input type="text" level="${item.level || ''}" data-type="${item.dataType}" data-field="${item.field || ''}"  class="form-control formatted-number ${cssId} text-end ${item.class || ''} text-end" id="${item.id}" name="${item.name}" placeholder="${item.placeholder || ' '}" title="${item.title || item.text || ''}" ${item.required?'required="required"':''} ${item.readonly==true?'readonly':''} onchange="${item.onchange || ''}" autocomplete="off_${moment().format('YYYYMMDDHHmmss')}" value="${convertNumber(item.value != undefined ? item.value : 0).formatMoney(item.round)}">`
	let s = frm_Group(input, item)
	document.querySelector(parentId).insertAdjacentHTML('beforeend', htmlEval(s))

	$(`${parentId} #${item.id}`).on({
		focus: function() {
			if($(this).attr('readonly'))
				return
			let sbuf = $(`${parentId} #${item.id}`).val()

			$(this).attr('type', 'number')
			$(this).val(convertNumber(sbuf).round(item.round || 2))

		},
		blur: function() {
			let sbuf = $(`${parentId} #${item.id}`).val()
			$(this).attr('type', 'text')
			$(this).val(Number(sbuf).formatMoney(item.round || 2))
		}
	})
	cb()
}

function frm_PriceBox(parentId, item, cb) {

	frm_MoneyBox(parentId, item, cb, 'frm-pricebox')
}

function frm_QuantityBox(parentId, item, cb) {

	frm_MoneyBox(parentId, item, cb, 'frm-quantitybox')
}

function frm_AmountBox(parentId, item, cb) {

	frm_MoneyBox(parentId, item, cb, 'frm-amountbox')
}


function frm_TotalBox(parentId, item, cb) {
	let input = `<input type="text" level="${item.level || ''}" data-type="${item.dataType}" data-field="${item.field || ''}" class="formatted-number w-100 border-0 text-end ${item.class || ''}" id="${item.id}" name="${item.name}" value="${convertNumber(item.value != undefined ? item.value : 0).formatMoney(item.round || 2)}" readonly>`
	let s = ''
	// if(item.noGroup === true) {
	// 	s = input
	// } else {

	s = `
		<div class="${item.col || 'col-12'} p-1">
			<div class="table-responsive ${item.visible===false?'hidden':''}">
				<table class="table align-middle m-0" title="${item.title || item.text || ''}">
					<tbody>
						<tr class="totalbox-row">
							<td class="w-50 text-start align-bottom py-0">${item.text || ''}</td>
							<td class="w-50 text-end align-bottom py-0">${input}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
		`
	// }


	document.querySelector(parentId).insertAdjacentHTML('beforeend', htmlEval(s))

	

	cb()
}


function frm_DateBox(parentId, item, cb) {
	let s = frm_Group(`<input type="date" level="${item.level || ''}" data-type="${item.dataType}" data-field="${item.field || ''}" class="form-control ${item.class || ''}" id="${item.id}" name="${item.name}" placeholder="${item.placeholder || ' '}" title="${item.title || item.text || ''}" ${item.required?'required="required"':''} ${item.readonly==true?'readonly':''} onchange="${item.onchange || ''}" autocomplete="off_${moment().format('YYYYMMDDHHmmss')}" value="${item.value!=undefined?item.value:''}">`, item)
	document.querySelector(parentId).insertAdjacentHTML('beforeend', htmlEval(s))
	cb()
}

function frm_TimeBox(parentId, item, cb) {
	let s = frm_Group(`<input type="time" level="${item.level || ''}" data-type="${item.dataType}" data-field="${item.field || ''}" class="form-control ${item.class || ''}" id="${item.id}" name="${item.name}" step="1" placeholder="${item.placeholder || ' '}" title="${item.title || item.text || ''}" ${item.required?'required="required"':''} ${item.readonly==true?'readonly':''} onchange="${item.onchange || ''}" autocomplete="off_${moment().format('YYYYMMDDHHmmss')}" value="${(item.value!=undefined?item.value:'').substr(0,8)}">`, item)
	document.querySelector(parentId).insertAdjacentHTML('beforeend', htmlEval(s))
	cb()
}

function frm_Lookup(parentId, item, cb) {
	// let s = `<select type="text" class="form-control ${item.class || ''}" id="${item.id}" name="${item.name}" placeholder="${item.placeholder || ' '}" title="${item.title || item.text || ''}" autocomplete="off_${moment().format('YYYYMMDDHHmmss')}" ${item.required?'required="required"':''} ${item.readonly==true?'disabled':''} onchange="${item.onchange || ''}">
	// <option value="" ${item.value==''?'selected':''}>${item.showAll===true?'*':'-- Seç --'}</option>`
	let s = `<select type="text" level="${item.level || ''}" data-type="${item.dataType}" data-field="${item.field || ''}" class="form-control ${item.class || ''}" id="${item.id}" name="${item.name}" placeholder="${item.placeholder || ' '}" title="${item.title || item.text || ''}" autocomplete="off_${moment().format('YYYYMMDDHHmmss')}" ${item.required?'required="required"':''} ${item.readonly==true?'disabled':''} onchange="${item.onchange || ''}">
	<option value="" ${item.value==''?'selected':''}>&#x2315;</option>`
	if(item.lookup) {
		if(Array.isArray(item.lookup)) {
			item.lookup.forEach((e) => {
				s += `<option value="${e}" ${e==item.value?'selected':''}>${e}</option>`
			})
		} else {
			Object.keys(item.lookup).forEach((key) => {
				s += `<option value="${key}" ${key==item.value?'selected':''}>${item.lookup[key]}</option>`
			})
		}

	}
	s += `</select>`

	if(item.lookupTextField) {
		s += `<input type="hidden" name="${item.lookupTextFieldName || ''}" value="">`
	}

	s = frm_Group(s, item)

	document.querySelector(parentId).insertAdjacentHTML('beforeend', htmlEval(s))

	if(item.lookupTextField) {
		$(`${parentId} #${item.id}`).on('change', () => {
			if($(`${parentId} #${item.id}`).val() != '') {
				$(`${parentId} input[name="${item.lookupTextFieldName || ''}"]`).val($(`${parentId} #${item.id} option:selected`).text())
			} else {
				$(`${parentId} input[name="${item.lookupTextFieldName || ''}"]`).val('')
			}
		})
	}

	cb()
}

function frm_CheckBoxLookup(parentId, item, cb) {

	let s = ``

	let input = `
	<select name="${item.name}" level="${item.level || ''}" data-type="${item.dataType}" data-field="${item.field || ''}"  id="${item.id}" class="form-control p-0 m-0 ${item.class || ''}" title="${item.title || item.text || ''}">
	<option value="">&#x2315;</option>
	<option value="true" ${(item.value!=undefined?item.value:'').toString()=='true'?'selected':''}><i class="fas fa-check-square text-primary"></i> Evet</option>
	<option value="false" ${(item.value!=undefined?item.value:'').toString()=='false'?'selected':''}><i class="far fa-square text-dark"></i> Hayır</option>
	</select>
	`
	if(item.noGroup === true) {
		s = input
	} else {
		s = `<div class="${item.col || ''} p-1 ${item.visible===false?'hidden':''}">
		<div class="form-group">
		<label>
		<span class="mb-1" style="display:block;">${item.text || ''}${helpButton(item)}</span>
		${input}
		</label>
		</div>
		</div>`
	}

	document.querySelector(parentId).insertAdjacentHTML('beforeend', htmlEval(s))
	cb()
}

function frm_RemoteLookup(parentId, item, cb) {

	let s = ``

	let input = `
	<input type="hidden" level="${item.level || ''}" data-type="${item.dataType}" data-field="${item.field || ''}"  name="${item.name}" value="${item.value!=undefined?item.value:''}">
	<input type="hidden" level="${item.level || ''}" data-type="${item.dataType}" data-field="${item.field || ''}"  id="${item.id}-obj"  value="">
	`
	if(item.lookupTextField) {
		input += `<input type="hidden" level="${item.level || ''}" data-type="${item.dataType}" data-field="${item.field || ''}"  name="${item.lookupTextFieldName || ''}" value="${item.valueText || ''}">`
	}

	input += `<input type="search" level="${item.level || ''}" data-type="${item.dataType}" data-field="${item.field || ''}"  class="form-control ${item.class || ''}" id="${item.id}-autocomplete-text"  placeholder="${item.noGroup === true?'&#x2315;':''}${item.placeholder || ' '}" value="${item.valueText || ''}" autocomplete="off_${moment().format('YYYYMMDDHHmmss')}"  ${item.required?'required="required"':''} ${item.readonly?'readonly':''} title="${item.title || 'Tümünü listelemek için BOŞLUK tuşuna basabilirsiniz.'}" >`

	if(item.noGroup === true) {
		s = input
	} else {
		s = `<div class="${item.col || ''} p-1 ${item.visible===false?'hidden':''}">
		<div class="g-input">
		${input}
		<label for="${item.id}-autocomplete-text" class="text-nowrap"><i class="fas fa-search"></i> ${item.text || ''}</label>
		</div>
		</div>
		`
	}


	document.querySelector(parentId).insertAdjacentHTML('beforeend', htmlEval(s))

	remoteLookupAutocomplete(item)
	cb()
}

function frm_CheckBox(parentId, item, cb) {
	let s = ``
	let sClass = `${item.class || 'form-check-input'}`

	if((item.name || '').toLowerCase().indexOf('passive') > -1) {
		sClass = `${item.class || 'form-check-input switch-dark'}`
	}

	let input = `<input type="checkbox" level="${item.level || ''}" data-type="${item.dataType}" data-field="${item.field || ''}"  class="${sClass}" id="${item.id}" name="${item.name}"  value="true" ${item.value?'checked':''} ${item.readonly==true?'disabled':''} onchange="${item.onchange || ''}" />`
	if(item.noGroup === true) {
		s = `<div class="form-switch  text-center  m-0  p-0 ms-3 ps-3">
		${input}
		</div>`
	} else {
		s = `<div class="${item.col || ''} p-1 ${item.visible===false?'hidden':''}">
		<div class="form-check form-switch" title="${item.title || item.text || ''}">
		${input}
		<label class="form-check-label" for="${item.id}">${item.text || ''}${helpButton(item)}</label>
		
		</div>
		</div>`
	}

	document.querySelector(parentId).insertAdjacentHTML('beforeend', htmlEval(s))
	cb()
}

function frm_DateRangeBox(parentId, item, cb) {
	let s = `
	<div class="${item.col || 'col-md-auto'} p-1">
	<div id="${item.id}" level="${item.level || ''}" data-type="${item.dataType}" data-field="${item.field || ''}"  class="d-md-flex m-0 p-0">
		<div class="g-input">
			<select class="form-control ${item.class || ''}" name="cbDate" id="cbDate">
			<option value="">Tarih</option>
			<option value="today">Bugün</option>
			<option value="thisWeek">Bu Hafta</option>
			<option value="thisMonth">Bu Ay</option>
			<option value="lastMonth">Geçen Ay</option>
			<option value="last1Week">Son 1 Hafta</option>
			<option value="last1Month">Son 1 Ay</option>
			<option value="last3Months">Son 3 Ay</option>
			<option value="last6Months">Son 6 Ay</option>
			<option value="thisYear">Bu yıl</option>
			<option value="last1Year">Son 1 yıl</option>
			</select>
			<label for="cbDate" class="">Tarih</label>
		</div>
		<div class="d-md-flex">
			<div class="g-input">
				<input type="date" name="date1" id="date1" class="form-control" value="${moment().format('YYYY-MM-DD')}">
				<label for="date1" class="">Başlangıç</label>
			</div>
			<div class="g-input">
				<input type="date" name="date2" id="date2" class="form-control" value="${moment().format('YYYY-MM-DD')}">
				<label for="date2" class="">Bitiş</label>
			</div>
		</div>
	</div>
	</div>`

	document.querySelector(parentId).insertAdjacentHTML('beforeend', htmlEval(s))

	$(`${parentId} #${item.id} #cbDate`).on('change', () => {
		cbDate_onchange()
		if(document.querySelector('#filterForm')) {
			runFilter('#filterForm')
		}
	})


	if((hashObj.query.cbDate || '') != '') {
		$(`${parentId} #${item.id} #cbDate`).val(hashObj.query.cbDate)
		if(hashObj.query.date1 || '' != '') {
			$(`${parentId} #${item.id} #date1`).val(hashObj.query.date1)
		}
		if(hashObj.query.date2 || '' != '') {
			$(`${parentId} #${item.id} #date2`).val(hashObj.query.date2)
		}
	} else if((hashObj.query.cbDate || '') == '' && hashObj.query.date1 && hashObj.query.date2) {
		$(`${parentId} #${item.id} #cbDate`).val('')
		$(`${parentId} #${item.id} #date1`).val(hashObj.query.date1)
		$(`#${item.id} #date2`).val(hashObj.query.date2)

		pageSettings.setItem('cbDate', '')

	} else if(pageSettings.getItem('cbDate')) {
		$(`${parentId} #${item.id} #cbDate`).val(pageSettings.getItem('cbDate'))
		cbDate_onchange()

	} else {
		if($(`${parentId} #${item.id} #cbDate`).val() == '') {
			$(`${parentId} #${item.id} #cbDate`).val('thisMonth')
		}
	}




	function cbDate_onchange() {
		let obj = cboEasyDateChange($(`${parentId} #${item.id} #cbDate`).val())
		$(`${parentId} #${item.id} #date1`).val(obj.date1)
		$(`${parentId} #${item.id} #date2`).val(obj.date2)
		pageSettings.setItem('cbDate', $(`${parentId} #${item.id} #cbDate`).val())
	}

	cb()
}
},{}],3:[function(require,module,exports){
let lastRecordRow = {}
var rootGridId = 1

function grid(parentId, item, insideOfModal, cb) {
	item = gridDefaults(item, insideOfModal)

	let s = `<div class="${item.col || 'col-12'} p-1">`
	s += `<div id="buttonPanel${item.id}" class="button-bar mt-4 mt-md-0 p-1 rounded justify-content-start" role="toolbar" aria-label="Toolbar with button groups"></div>`
	if(item.options.show.infoRow) {
		s += `
		<div class="border p-1">
		<div class="d-md-flex pt-1 px-1">
		<div class="d-md-flex flex-fill m-0 p-0 mt-1 mb-1">
		${item.options.show.filter?'<a class="btn btn-secondary btn-sm me-md-3" style="max-height:28px;" data-bs-toggle="collapse" href="#filterRow" role="button" aria-expanded="false" aria-controls="filterRow" title="Filtre satırını göster/gizle"><i class="fas fa-filter"></i></a>':''}
		${item.options.show.pageSize?gridPageSize(item ):''}
		${item.options.show.pageCount?gridPageCount(item ):''}
		</div>
		${item.options.show.pagerButtons?'<div class="float-right">' + gridPagerButtons(item ) + '</div>':''}
		</div>
		</div>
		`
	}
	s += `
	<div id="${item.id}" level="${item.level}" data-type="${item.dataType}" data-field="${item.field || ''}" class="table-responsive p-0 ${item.options.show.infoRow?'mt-1':''}">
	<table id="table${item.id}" class="table table-striped border m-0 haham-table ${item.level>0 ?'table-bordered':''}"  cellspacing="0">
	<tbody>
	</tbody>
	</table>
	</div>
	`

	if(item.options.show.infoRow) {
		s += `
		<div class="border p-1">
		<div class="d-md-flex pt-1 px-1">
		<div class="d-md-flex flex-fill m-0 p-0 mt-1 mb-1">
		<div class="">
		<a class="btn btn-success btn-sm" href="javascript:gridCSVExport('${item.id}')" title="CSV indir"><i class="far fa-file-excel"></i><i class="ms-2 fas fa-download"></i></a>
		</div>
		${item.options.show.pageCount?gridPageCount(item ):''}
		</div>
		${item.options.show.pagerButtons?'<div class="float-right">' + gridPagerButtons(item ) + '</div>':''}
		</div>
		</div>
		`
	}

	s += `</div>`
	document.querySelector(parentId).insertAdjacentHTML('beforeend', htmlEval(s))

	document.querySelector(`${parentId} #${item.id}`).item = item

	if(item.level == 0) {
		programFileUploaderChangeEvent()
	}

	gridButtonPanel(`${parentId} #buttonPanel${item.id}`, item, insideOfModal, () => {
		gridHeader(`${parentId} #${item.id}`, item, insideOfModal, () => {
			gridBody(`${parentId} #${item.id}`, item, insideOfModal, () => {

				$(`#pageSize${item.id}`).on('change', () => {
					hashObj.query.pageSize = $(`#pageSize${item.id}`).val()
					hashObj.query.page = 1
					pageSettings.setItem(`pageSize`, $(`#pageSize${item.id}`).val())
					setHashObject(hashObj)
				})

				$(`#selectAll${item.id}`).on(`change`, (e) => {
					$(`input:checkbox`).not($(`#selectAll${item.id}`)).prop(`checked`, $(`#selectAll${item.id}`).prop(`checked`))
				})

				if(pageSettings.getItem(`filterButton`) == true) {
					$(`#filterRow`).collapse('show');
				} else {
					$(`#filterRow`).collapse('hide');
				}

				$(`#filterRow`).on(`hidden.bs.collapse`, function() {
					pageSettings.setItem(`filterButton`, false)
				})
				$(`#filterRow`).on(`shown.bs.collapse`, function() {
					pageSettings.setItem(`filterButton`, true)
				})




				$(document).on('loaded', function() {

					grid_onchange(item)

				})

				cb()
			})
		})
	})
}

function gridButtonPanel(parentId, item, insideOfModal, cb) {
	let prgButtons = []
	if(hashObj.settings) {
		prgButtons = hashObj.settings.programButtons || []
	}

	if((prgButtons.length == 0 && !item.panelButtons) || item.level > 0) {
		$(parentId).hide()
		return cb()
	}
	$(parentId).show()
	let s = ``
	if(prgButtons.length > 0) {
		prgButtons.forEach((e) => {
			if(e.passive == false) {
				let icon = ''
				let text = e.text || ''
				if((e.icon || '') != '') {
					icon = e.icon
				} else {
					switch (e.program.type) {
						case 'file-importer':
							icon = 'fas fa-file-import'
							break
						case 'file-exporter':
							icon = 'fas fa-file-export'
							break
						case 'connector-importer':
							icon = 'fas fa-cloud-upload-alt'
							break

						case 'connector-exporter':
							icon = 'fas fa-cloud-download-alt'
							break

						case 'email':
							icon = 'fas fa-envelope-square'
							break

						case 'sms':
							icon = 'fas fa-sms'
							break
					}
				}
				s += `<a class="${e.class || 'btn btn-primary'} me-2" href="javascript:runProgram('${e.program._id}','${e.program.type}')" title="${e.text || text}">${icon!=''?'<i class="' + icon + '"></i>':''} ${text}</a>`
			}
		})
	}
	s += `<input type="file" name="fileUpload" id="fileUpload" style="visibility:hidden;display:none;" accept="*.*" multiple>`
	if(item.panelButtons) {
		let dizi = Object.keys(item.panelButtons)
		let index = 0

		function calistir(cb1) {
			if(index >= dizi.length) {
				return cb1()
			}
			let key = dizi[index]
			item.panelButtons[key].noGroup = true
			item.panelButtons[key].class = item.panelButtons[key].class || 'btn btn-primary'
			item.panelButtons[key].class += ' me-2'
			item.panelButtons[key].type = 'button'
			if(!item.panelButtons[key].href && item.panelButtons[key].dataSource) {
				item.panelButtons[key].href = `javascript:runPanelButtons('${item.panelButtons[key].dataSource.url}','${item.panelButtons[key].dataSource.method}')`
			}

			frm_Button(parentId, item.panelButtons[key], () => {
				index++
				setTimeout(calistir, 0, cb1)
			})
		}

		calistir(() => {
			document.querySelector(parentId).insertAdjacentHTML('beforeend', htmlEval(s))
			cb()
		})

	} else {
		document.querySelector(parentId).insertAdjacentHTML('beforeend', htmlEval(s))
		cb()
	}
}

function gridBody(parentId, item, insideOfModal, cb) {
	document.querySelector(`${parentId} table tbody`).innerHTML = ''
	if(item.value) {
		let list = []
		if(Array.isArray(item.value)) {
			list = item.value
		} else if(item.value.docs) {
			list = item.value.docs
		}
		let nextIdentity = list.length + 1

		let fieldList = clone(item.fields)
		let s = ``

		list.forEach((listItem, rowIndex) => {
			listItem.rowIndex = rowIndex
			s += `<tr>`
			if(item.options.selection) {
				s += `<td><input class="grid-checkbox checkSingle" type="checkbox" value="${listItem._id || ''}" /></td>`
			}
			Object.keys(fieldList).forEach((key) => {
				var field = fieldList[key]
				field.field = key
				field.parentField = item.parentField || ''
				field.class = replaceUrlCurlyBracket(field.class, listItem)
				s += gridBody_Cell(field, listItem, insideOfModal)
			})
			if(item.options.buttonCount > 0) {
				s += `<td class="text-center text-nowrap">${buttonRowCell(listItem,rowIndex,item )}</td>`
			}
			s += `</tr>`
		})

		document.querySelector(`${parentId} table tbody`).insertAdjacentHTML('beforeend', htmlEval(s))


		refreshRemoteList(remoteList)
	}

	grid_onchange(item)

	if(item.level > 0) {
		if(item.options.buttons.add[0]) {
			gridYeniSatir(`${parentId}`, insideOfModal)
		}
	}

	if(document.querySelector(`#gridShowHideModalSwith_${item.id}`)) {
		if(pageSettings.getItem(`showHideModalButtons_${item.id}`) === true) {
			$(`#gridShowHideModalSwith_${item.id}`).prop('checked', true)
		} else {
			$(`#gridShowHideModalSwith_${item.id}`).prop('checked', false)
		}
		document.querySelector(`#gridShowHideModalSwith_${item.id}`).onchange()
	}

	if(cb) {
		cb()
	}
}

function gridYeniSatir(parentId, insideOfModal) {
	let table = document.querySelector(parentId)
	let tbody = document.querySelector(`${parentId} table tbody`)
	let item = table.item
	let rowIndex = -1
	let newRow = tbody.insertRow()
	let fieldList = clone(item.fields)
	newRow.id = `${table.id}-gridSatir-edit-${rowIndex}`
	newRow.classList.add('grid-modal-mode-off')
	Object.keys(fieldList).forEach((key, cellIndex) => {
		var field = clone(fieldList[key])
		field.field = `${item.field}.${rowIndex}.${key}`
		field.id = generateFormId(field.field)
		field.name = generateFormName(field.field)
		field.noGroup = true
		field.value = field.value || ''
		field.valueText = field.valueText || ''
		var td = newRow.insertCell()
		td.id = 'td_' + field.id


		if(field.lastRecord) {
			if(table.item.value.length > 0) {
				field.value = getPropertyByKeyPath(table.item.value[table.item.value.length - 1], key)
			}
		}

		if(field.type == 'identity') {
			field.value = tbody.rows.length
		}

		if(field.visible === false) {
			td.classList.add('hidden')
		}
		generateControl(`${parentId} table #${td.id}`, field, {}, insideOfModal, () => {

		})

	})

	let td = newRow.insertCell()
	td.classList.add('text-center')
	td.innerHTML = `<a href="javascript:gridSatirOK('${parentId}','${newRow.id}',${rowIndex},${insideOfModal})" class="btn btn-primary btn-grid-row" title="Tamam"><i class="fas fa-check"></i></a>
	<a href="javascript:gridSatirVazgec('${parentId}','${newRow.id}',${rowIndex},${insideOfModal}) "class="btn btn-dark btn-grid-row" title="Vazgeç"><i class="fas fa-reply"></i></a>
	`
	editRowCalculation(`${parentId} tbody #${newRow.id}`, `${table.item.parentField}.${rowIndex}`, fieldList)
	ilkElemanaFocuslan(`${parentId} #${newRow.id}`)
}

function editRowCalculation(selector, prefix, fields) {

	$(`${selector} input, ${selector} select`).on('blur', function(e) {
		let valueObj = getDivData(selector, prefix)
		let listObj = objectToListObject(valueObj)
		Object.keys(fields).forEach((key) => {
			if(['number', 'money', 'amount', 'quantity', 'price', 'total'].includes(fields[key].type)) {
				if(isNaN(listObj[key]))
					listObj[key] = 0
				listObj[key] = convertNumber(listObj[key])
			}
		})
		valueObj = listObjectToObject(listObj)

		Object.keys(fields).forEach((key) => {
			if(fields[key].id != e.target.id && fields[key].calc) {
				let id = generateFormId(`${key}`)
				if(prefix != '') {
					id = generateFormId(`${prefix}_${key}`)
				}

				try {

					let deger = calculate(fields[key].calc, valueObj)

					if(['money', 'amount', 'quantity', 'price', 'total'].includes(fields[key].type)) {
						$(`${selector} #${id}`).val(deger.formatMoney(fields[key].round || 2))
					} else if(fields[key].type == 'number') {
						$(`${selector} #${id}`).val(deger.round(3))
					} else if(fields[key].type == 'total') {
						$(`${selector} #${id}`).val(deger.formatMoney())
					} else {
						$(`${selector} #${id}`).val(deger)
					}

				} catch (tryErr) {
					console.error(`tryErr:`, tryErr)
					$(`${selector} #${id}`).val(0)
				}
			}
		})
	})
}

function gridSatirOK(tableId, rowId, rowIndex, insideOfModal) {
	var table = document.querySelector(tableId)
	var satirObj = getDivData(`${tableId} #${rowId}`, `${table.item.field}.${rowIndex}`)

	if(rowIndex > -1) {
		table.item.value[rowIndex] = Object.assign({}, table.item.value[rowIndex], satirObj)
	} else {
		table.item.value.push(satirObj)
	}

	gridBody(`${tableId}`, table.item, insideOfModal, () => {})
	if(typeof formCalc == 'function') formCalc(tableId)
}

function gridSatirVazgec(tableId, rowId, rowIndex, insideOfModal) {
	let table = document.querySelector(tableId)
	gridBody(`${tableId}`, table.item, insideOfModal, () => {})
}

function gridSatirDuzenle(tableId, rowIndex, insideOfModal) {
	let table = document.querySelector(tableId)
	let thead = document.querySelector(`${tableId} thead`)
	let tbody = document.querySelector(`${tableId} tbody`)
	let editRow
	if(rowIndex > -1) {
		let trYedek = tbody.rows[rowIndex].cloneNode(true)
		tbody.deleteRow(rowIndex)
		editRow = tbody.insertRow(rowIndex)
		editRow.id = `${table.id}-gridSatir-edit-${rowIndex}`
		editRow.detail = trYedek


	} else {
		return
		// editRow = tbody.insertRow()
		// editRow.id = `${table.id}-gridSatir-edit-${rowIndex}`
	}

	editRowSekillendir(table.item, editRow, tableId, rowIndex)
	//let fieldList=clone(table.item.fields)

	editRowCalculation(`${tableId} tbody #${editRow.id}`, `${table.item.parentField}.${rowIndex}`, table.item.fields)
	ilkElemanaFocuslan(`${tableId} tbody #${editRow.id}`)

	function editRowSekillendir(item, editRow, tableId, rowIndex) {
		Object.keys(item.fields).forEach((key, cellIndex) => {
			var field = clone(item.fields[key])
			field.field = `${item.field}.${rowIndex}.${key}`
			field.id = generateFormId(field.field)
			field.name = generateFormName(field.field)
			field.noGroup = true
			field.value = ''
			var td = editRow.insertCell()
			td.id = 'td_' + field.id
			if(field.visible === false) {
				//td.innerHTML = editRow.detail.cells[cellIndex].innerHTML
				td.classList.add('hidden')
			}
			if(editRow.detail.cells[cellIndex].querySelector(`input`)) {
				field.value = editRow.detail.cells[cellIndex].querySelector(`input`).value
			}
			if(field.type == 'boolean') {
				//field.class='grid-checkbox'
				field.value = field.value.toString() === 'true' ? true : false
			}

			field.valueText = editRow.detail.cells[cellIndex].innerText
			var data = { value: {} }
			data.value[field.field] = field.value
			if(field.lookupTextField) {
				data.value[field.lookupTextField] = field.valueText
			}
			data.value = listObjectToObject(data.value)

			generateControl(`${tableId} #${td.id}`, field, data.value, insideOfModal, () => {})
		})

		let td = editRow.insertCell()
		td.classList.add('text-center')
		td.innerHTML = `<a href="javascript:gridSatirOK('${tableId}','${editRow.id}',${rowIndex},${insideOfModal})" class="btn btn-primary btn-grid-row" title="Tamam"><i class="fas fa-check"></i></a>
		<a href="javascript:gridSatirVazgec('${tableId}','${editRow.id}',${rowIndex},${insideOfModal}) "class="btn btn-dark btn-grid-row" title="Vazgeç"><i class="fas fa-reply"></i></a>
		`
	}
}

function gridBody_Cell(field, listItem, insideOfModal) {
	let s = ''
	let td = ''
	let tdClass = `${field.class || 'ms-1'} `
	let itemValue = ''
	if(field.type.toLowerCase() == 'identity' || field.type.toLowerCase() == 'autoincrement' || field.type.toLowerCase() == 'autoinc') {
		itemValue = listItem.rowIndex + 1
	} else {
		if(field.html && field.type != 'lookup') {
			itemValue = replaceUrlCurlyBracket(field.html, listItem) || ''
		} else {
			itemValue = getPropertyByKeyPath(listItem, field.field, itemValue)
			if(itemValue == undefined) {
				itemValue = ''
				if(['number', 'money', 'amount', 'quantity', 'price', 'total'].includes(field.type)) {
					itemValue = 0
				} else if(field.type == 'boolean') {
					itemValue = false
				}
			}
		}
	}

	switch (field.type.toLowerCase()) {
		case 'lookup':
			let valueText = ''
			let o = Object.assign({}, listItem)
			Object.keys(field.lookup || {}).forEach((key2) => {
				if(key2 === itemValue.toString()) {
					td += field.lookup[key2]
					valueText = field.lookup[key2]
					return
				}
			})
			if(td == '') {
				td += itemValue
			}

			if(field.lookupTextField) {
				o[field.lookupTextField] = valueText
				if(field.level > 0) {
					td += `<input type="hidden" name="${generateFormName((field.parentField?field.parentField + '.':'') + listItem.rowIndex + '.' + field.lookupTextField)}" value="${valueText}" />`
				}
			}
			if(field.html) {

				o[field.field] = itemValue.toString()
				o['valueText'] = valueText

				td = replaceUrlCurlyBracket(field.html, o) || ''
			}
			break

		case 'number':
		case 'money':
		case 'amount':
		case 'price':
		case 'quantity':
		case 'total':
			tdClass = field.class || 'text-end me-1'
			// td = Number(itemValue).formatMoney(field.round || 2)
			td = cellFormatNumber(field.type, itemValue, field.round)
			break
			// case 'total':
			// 	tdClass = field.class || 'text-end me-1'
			// 	td = Number(itemValue).formatMoney()
			// 	break
		case 'date':
			td = (new Date(itemValue)).yyyymmdd()
			break
		case 'time':
			td = (new Date(itemValue)).hhmmss()
			break
		case 'datetime':
			td = (new Date(itemValue)).yyyymmddhhmmss()
			break
		case 'fromnow':
			td = moment((new Date(itemValue))).fromNow()
			break
		case 'boolean':
			// let swClass = `${field.class || 'form-check-input grid-checkbox'}`
			// if((field.name || '').toLowerCase().indexOf('passive') > -1) {
			// 	swClass = `${field.class || 'form-check-input grid-checkbox switch-dark'}`
			// }
			tdClass = field.class || 'text-center'
			itemValue = (itemValue || '').toString() === 'true' ? true : false
			td = itemValue ? '<i class="fas fa-check-square text-primary font-size-150"></i>' : '<i class="far fa-square text-dark font-size-150"></i>'
			// td = `
			// <div class="form-switch  m-0  p-0 ms-3 ps-3">
			// 	<input type="checkbox" class="${swClass}" value="true" ${itemValue?'checked':''} disabled />
			// </div>`


			break
		case 'remotelookup':
			let bRemoteOlarakBulalim = true
			if(itemValue == undefined) {
				itemValue = ''
			}
			if(typeof itemValue == 'object' && itemValue._id != undefined) {
				td = `<div class="">${replaceUrlCurlyBracket((field.dataSource.label || '{name}'), itemValue)}</div>`
				bRemoteOlarakBulalim = false
			} else if(field.lookupTextField) {
				let valueText = getPropertyByKeyPath(listItem, field.lookupTextField)
				td = `<div class="">${valueText}</div>`
				if(field.level > 0) {
					td += `<input type="hidden" name="${generateFormName((field.parentField?field.parentField + '.':'') + listItem.rowIndex + '.' + field.lookupTextField)}" value="${valueText}" />`
				}

				if(valueText == '' && itemValue != '') {
					bRemoteOlarakBulalim = true
				} else {
					bRemoteOlarakBulalim = false
				}
			}

			if(bRemoteOlarakBulalim) {
				let cellId = ''
				if(itemValue != '') {
					cellId = `${field.field}-cell-${itemValue}`
					if(remoteList == undefined) {
						remoteList = {}
					}

					if(remoteList[field.field] == undefined) {
						remoteList[field.field] = {
							dataSource: field.dataSource,
							list: {}
						}
					}

					if(remoteList[field.field].list[itemValue] == undefined) {
						remoteList[field.field].list[itemValue] = {
							cellId: '.' + cellId,
							text: ''
						}
						if(field.lookupTextField) {
							remoteList[field.field].list[itemValue]['lookupTextField'] = `${generateFormName((field.parentField?field.parentField + '.':'') + listItem.rowIndex + '.' + field.lookupTextField)}`
						}
					}
				}
				td += `<div class="${cellId}">${itemValue?'<span class="text-danger bold">(bulunamadı)</span>':''}</div>`
			}
			break

		default:
			td = itemValue
			break
	}
	if(!field.html && field.level > 0) {
		var prefix = (field.parentField ? field.parentField + '.' : '') + listItem.rowIndex
		if(Array.isArray(itemValue)) {

			itemValue.forEach((e, index) => {
				if(typeof e == 'object') {
					Object.keys(e).forEach((k) => {
						td += `<input type="hidden" name="${generateFormName(prefix + '.' + field.field + '.' + index + '.' + k)}" value="${e[k]}" />`
					})
				} else {
					td += `<input type="hidden" name="${generateFormName(prefix + '.' + field.field + '.' + index)}" value="${e}" />`
				}
			})
		} else if(typeof itemValue == 'object') {

			itemValue = objectToListObject(itemValue)
			Object.keys(itemValue).forEach((e) => {
				td += `<input type="hidden" name="${generateFormName(prefix + '.' + field.field + '.' + e)}" value="${itemValue[e]}" />`
			})

		} else {
			td += `<input type="hidden" name="${generateFormName(prefix + '.' + field.field)}" value="${itemValue}" />`
		}
	}

	s += `<td class="${tdClass || ''} ${field.visible===false?'hidden':''}">${td}</td>`

	return s
}

function cellFormatNumber(fieldType, deger, precision) {
	if(precision == undefined)
		precision = 2
	let bSifirlariGizle = true
	let s = ``
	let formatliDeger = convertNumber(deger).formatMoney(precision)
	let bolumler = formatliDeger.split(whatDecimalPointer())
	let thousand = bolumler[0]
	let decimal = bolumler.length > 1 ? bolumler[1] : '0'.repeat(precision)

	let thousandSpan = `<span class="td-${fieldType}-thousand">${thousand}</span>`
	let decimalSpan = `<span class="td-${fieldType}-decimal">${whatDecimalPointer()}${decimal}</span>`
	s = thousandSpan + decimalSpan
	return s
}

function gridButtonOptions(item, insideOfModal) {
	let options = item.options || {}
	let buttonCount = 0
	let currentPath = window.location.pathname
	let defaultButtons = {
		add: [false, ''],
		copy: [false, ''],
		view: [false, ''],
		print: [false, ''],
		edit: [false, ''],
		delete: [false, '']
	}
	if(options.buttons == undefined) {
		options.buttons = defaultButtons
	} else {
		options.buttons = Object.assign({}, defaultButtons, options.buttons)
		Object.keys(options.buttons).forEach((key) => {
			if(typeof options.buttons[key] == 'boolean') {
				options.buttons[key] = [options.buttons[key], '']
			} else if(Array.isArray(options.buttons[key])) {
				if(options.buttons[key].length < 2)
					options.buttons[key].push('')
			}
		})
	}
	let q = {}
	if(hashObj.query.mid)
		q = { mid: hashObj.query.mid }
	if(options.queryValues) {
		q = hashObj.query
	} else {

	}
	if(options.buttons.add[0] == true && options.buttons.add[1] == '') {
		if(item.level == 0) {
			options.buttons.add[1] = `<a href="${menuLink(hashObj.path + '/addnew',q)}" class="btn btn-primary  btn-sm far fa-plus-square" target="_self"  title="Yeni Ekle"></a>`
		} else {
			if(item.modal && !item.insideOfModal) {
				// let switchButton = `<div class="form-switch  text-center  m-0  p-0 ms-3 ps-3">
				// <input type="checkbox" class="form-check-input switch-cyan" id="showHideModal_${item.id}" value="true" onchange="console.log($('#showHideModal_${item.id}').val())" />
				// </div>`
				let switchButton = `<div class="form-switch  text-center  m-0  p-0 ms-3 ps-3">
				<input type="checkbox" id="gridShowHideModalSwith_${item.id}" class="form-check-input switch-cyan" value="true" onchange="gridShowHideModalButtons('${item.id}',this.checked)" title="Modal çalışma On/Off"/>
				</div>`

				options.buttons.add[1] = `<div class="d-flex justify-content-between px-2">
					${switchButton}
					<a href="javascript:gridModalAddRow('#${item.id}',${insideOfModal})" class="btn btn-primary  btn-sm far fa-plus-square grid-modal-mode-on" target="_self"  title="Yeni Ekle (modal)"></a>
				</div>`
				// options.buttons.add[1] = `<a href="javascript:gridModalAddRow('#${item.id}',${insideOfModal})" class="btn btn-primary  btn-sm far fa-plus-square" target="_self"  title="Yeni Ekle (modal)"></a>`
			} else {
				options.buttons.add[1] = ``
			}
		}
	}

	if(options.buttons.copy[0] == true && options.buttons.copy[1] == '') {
		options.buttons.copy[1] = `<a href="javascript:gridCopyItem({rowIndex},'#${item.id}')" class="btn btn-grid-row btn-success " title="Kopyala"><i class="fas fa-copy"></i></a>`
	}

	if(options.buttons.print[0] == true && options.buttons.print[1] == '') {
		var q2 = clone(q)
		q2['view'] = 'print'

		if(hashObj.settings.print) {
			if(hashObj.settings.print.form) {
				q2['designId'] = hashObj.settings.print.form._id
			}
		}

		options.buttons.print[1] = `<a href="javascript:popupCenter('${menuLink(hashObj.path + '/print/{_id}',q2)}','Yazdır','900','600')" class="btn btn-grid-row btn-info " title="Yazdır"><i class="fas fa-print"></i></a>`
	}

	if(options.buttons.view[0] == true && options.buttons.view[1] == '') {
		options.buttons.view[1] = `<a href="${menuLink(hashObj.path + '/view/{_id}',q)}" class="btn btn-info btn-grid-row fas fa-eye" title="İncele"></a>`
	}

	if(options.buttons.edit[0] == true && options.buttons.edit[1] == '') {
		if(item.level == 0) {
			options.buttons.edit[1] = `<a href="${menuLink(hashObj.path + '/edit/{_id}',q)}" class="btn btn-primary btn-grid-row fas fa-edit" target="_self"  title="Düzenle"></a>`
		} else {
			if(!insideOfModal) {
				options.buttons.edit[1] = `<a href="javascript:gridSatirDuzenle('#${item.id}',{rowIndex},${insideOfModal})" class="btn btn-info btn-grid-row fas fa-edit grid-modal-mode-off" title="Satır Düzenle"></a>`
				if(item.modal) {
					options.buttons.edit[1] += `<a href="javascript:gridModalEditRow('#${item.id}',{rowIndex},${insideOfModal})" class="btn btn-success btn-grid-row fas fa-window-restore grid-modal-mode-on" title="Modal Düzenle"></a>`
				}
			} else {
				options.buttons.edit[1] = `<a href="javascript:gridSatirDuzenle('#modalRow #${item.id}',{rowIndex},${insideOfModal})" class="btn btn-info btn-grid-row fas fa-edit" title="Satır Düzenle"></a>`
			}
		}
	}

	if(options.buttons.delete[0] == true && options.buttons.delete[1] == '') {
		if(item.level == 0) {
			options.buttons.delete[1] = `<a href="javascript:gridDeleteItem({rowIndex},'#${item.id}')" class="btn btn-danger btn-grid-row fas fa-trash-alt" title="Sil"></a>`
		} else {
			if(!insideOfModal) {
				options.buttons.delete[1] = `<a href="javascript:gridSatirSil('#${item.id}',{rowIndex},${insideOfModal})" class="btn btn-danger btn-grid-row fas fa-trash-alt" title="Sil"></a>`
			} else {
				options.buttons.delete[1] = `<a href="javascript:gridSatirSil('#modalRow #${item.id}',{rowIndex},${insideOfModal})" class="btn btn-danger btn-grid-row fas fa-trash-alt" title="Sil"></a>`
			}
		}
	}

	Object.keys(options.buttons).forEach((key) => {
		buttonCount += options.buttons[key][0] ? 1 : 0
	})
	if(buttonCount > 1 && options.buttons.add[0])
		buttonCount--

	buttonCount = buttonCount > 4 ? 4 : buttonCount

	if(item.level == 0) {
		options.buttonWidth = `${buttonCount*45+10}px`
	} else {
		options.buttonWidth = `${2*45+10}px`
	}
	item.options = options
	item.options.buttonCount = buttonCount

	return item
}

function gridShowHideModalButtons(parentId, checked) {
	pageSettings.setItem(`showHideModalButtons_${parentId}`, checked)

	// let modeOnElements=document.getElementsByClassName('grid-modal-mode-on')
	// console.log(`modeOnElements.length:`,modeOnElements.length)
	// let i=0
	// while(i<modeOnElements.length){
	// 	modeOnElements[i].style.visibility=checked?'visible':'collapse'
	// 	i++
	// }

	// let modeOffElements=document.getElementsByClassName('grid-modal-mode-off')
	// console.log(`modeOffElements.length:`,modeOffElements.length)
	// i=0
	// while(i<modeOffElements.length){
	// 	modeOffElements[i].style.visibility=checked?'collapse':'visible'
	// 	i++
	// }

	if(checked) {

		$('.grid-modal-mode-on').show()
		$('.grid-modal-mode-off').hide()
	} else {
		$('.grid-modal-mode-on').hide()
		$('.grid-modal-mode-off').show()
	}

}

function gridHeader(parentId, item, insideOfModal, cb) {
	var s = `
	<thead>
	<tr class="text-nowrap">`
	if(item.options.selection === true) {
		s += `<th style="width: 30px;"><input class="grid-checkbox" type="checkbox" value="true" name="selectAll${item.id}" id="selectAll${item.id}" title="Tümünü seç"></th>`
	}

	Object.keys(item.fields).forEach((key) => {
		var field = item.fields[key]
		var cls = ''
		switch (item.fields[key].type) {
			case 'number':
			case 'money':
			case 'amount':
			case 'price':
			case 'quantity':
			case 'total':
				cls = 'text-end me-1'
				break
			case 'boolean':
				cls = 'text-center'
				break
		}
		if(field.visible === false) {
			cls += ' hidden'
		}
		s += `<th class="${cls}" style="${field.width?'width:' + field.width + ';min-width:' + field.width + ';':''}">${field.icon?'<i class="' + field.icon + '"></i>':''} ${itemLabelCaption(field)}</th>`
	})

	if(item.options.buttonCount > 0) {
		s += `<th class="text-center" style="width:${item.options.buttonWidth}">
		${item.options.buttons.add[0]==true?item.options.buttons.add[1]:''}
		</th>`
	}

	s += `
	</tr>
	</thead>
	`

	document.querySelector(`${parentId} table`).insertAdjacentHTML('afterbegin', htmlEval(s))

	gridFilterRow(`${parentId} table thead`, item, insideOfModal, cb)
}

function gridFilterRow(parentId, item, insideOfModal, cb) {

	if(item.options.show.filterRow !== true) {
		return cb()
	}
	document.querySelector(`${parentId}`).insertAdjacentHTML('beforeend', `<tr id="filterRow" class="text-nowrap collapse">${item.options.selection===true?'<th></th>':''}</tr>`)

	let dizi = Object.keys(item.fields)
	let index = 0

	function calistir(cb1) {
		if(index >= dizi.length) {
			return cb1()
		}
		let field = Object.assign({}, item.fields[dizi[index]])

		field.filter = field.filter == undefined ? item.options.filter : field.filter
		document.querySelector(`${parentId} #filterRow`).insertAdjacentHTML('beforeend', `<th id="filterCol${index}" ${field.visible===false?'class="hidden"':''}></th>`)

		if(field.filter && field.visible !== false) {
			field.filterField = field.filterField || dizi[index]
			field.id = generateFormId(`${item.id}_filter_${field.filterField}`)
			field.prefix = generateFormId(`${item.id}_filter`)
			field.name = generateFormName(`${item.id}_filter.${field.filterField}`)
			field.class = 'grid-filter'
			field.noGroup = true
			//field.placeholder=field.placeholder || ' '
			field.showAll = true
			if((hashObj.query[field.filterField] || '') != '') {
				field.value = hashObj.query[field.filterField]
			}
			filterControl(`${parentId} #filterRow #filterCol${index}`, `${parentId} #filterRow`, field, () => {
				index++
				setTimeout(calistir, 0, cb1)
			})
		} else {
			index++
			setTimeout(calistir, 0, cb1)
		}
	}

	calistir(() => {
		document.querySelector(`${parentId} #filterRow`).insertAdjacentHTML('beforeend', `<th>&nbsp;</th>`)
		cb()
	})
}

function filterControl(parentId, filterRowDivId, field, cb) {
	switch (field.type.toLowerCase()) {
		case 'lookup':
			frm_Lookup(parentId, field, () => {
				$(`#${field.id}`).on('change', (e) => {
					keyupTimer = 0
					runFilter(filterRowDivId, field.prefix)
				})
				cb()
			})
			break
		case 'remotelookup':
			frm_RemoteLookup(parentId, field, () => {
				$(`#${field.id}-autocomplete-text`).on('change', (e) => {
					keyupTimer = 0
					runFilter(filterRowDivId, field.prefix)
				})
				cb()
			})
			break
		case 'boolean':
			frm_CheckBoxLookup(parentId, field, () => {
				$(`#${field.id}`).on('change', (e) => {
					keyupTimer = 0
					runFilter(filterRowDivId, field.prefix)
				})
				cb()
			})
			break
		case 'date':
			frm_DateBox(parentId, field, () => {
				$(`#${field.id}`).on('change', (e) => {
					keyupTimer = 0
					runFilter(filterRowDivId, field.prefix)
				})
				cb()
			})
			break
		case 'time':
			frm_TimeBox(parentId, field, () => {
				$(`#${field.id}`).on('change', (e) => {
					keyupTimer = 0
					runFilter(filterRowDivId, field.prefix)
				})
				cb()
			})
			break
		case 'number':
			frm_TextBox(parentId, field, () => {
				$(`#${field.id}`).on('keyup', (e) => {
					setTimeout(() => {
						keyupTimer = 1
						runFilter(filterRowDivId, field.prefix)
					}, 800)
				})
				cb()
			})
			break
		case 'money':
			frm_TextBox(parentId, field, () => {
				$(`#${field.id}`).on('keyup', (e) => {
					setTimeout(() => {
						keyupTimer = 1
						runFilter(filterRowDivId, field.prefix)
					}, 800)
				})
				cb()
			})
			break
		case 'total':
			frm_TextBox(parentId, field, () => {
				$(`#${field.id}`).on('keyup', (e) => {
					setTimeout(() => {
						keyupTimer = 1
						runFilter(filterRowDivId, field.prefix)
					}, 800)
				})
				cb()
			})
			break
		default:
			frm_TextBox(parentId, field, () => {
				$(`#${field.id}`).on('keyup', (e) => {
					setTimeout(() => {
						keyupTimer = 1
						runFilter(filterRowDivId, field.prefix)
					}, 800)
				})
				cb()
			})
			break
	}
}

function gridFooter(item) {
	return ``
}

function filterFormButton(divId) {
	var s = `
	<div class="ms-auto col text-end pt-2 pt-md-4">
	<a href="javascript:runFilter('#${divId}')" class="btn btn-primary text-nowrap" title="Filtrele" ><i class="fas fa-sync-alt"><i class="fas fa-filter ms-2"></i></i></a>
	</div>
	`

	return s
}

function buttonRowCell(listItem, rowIndex, item) {
	var s = ``

	listItem['rowIndex'] = rowIndex
	Object.keys(item.options.buttons).forEach((key) => {
		if(key != 'add') {
			s += `${item.options.buttons[key][0]?replaceUrlCurlyBracket(item.options.buttons[key][1],listItem):''}`
		}
	})

	return s
}

function gridPageSize(item) {

	var s = `<div class="align-items-center" style="display: inline-flex">
	Sayfada
	<select class="form-control input-inline input-sm ms-1" id="pageSize${item.id}">
	<option value="10" ${item.value.pageSize==10?'selected':''}>10</option>
	<option value="20" ${item.value.pageSize==20?'selected':''}>20</option>
	<option value="50" ${item.value.pageSize==50?'selected':''}>50</option>
	<option value="100" ${item.value.pageSize==100?'selected':''}>100</option>
	<option value="250" ${item.value.pageSize==250?'selected':''}>250</option>
	<option value="500" ${item.value.pageSize==500?'selected':''}>500</option>
	</select>
	</div>`

	return s
}

function gridPageCount(item) {
	var s = `<div class="mt-1 ms-2" style="display: inline-block">`
	if(item.value.pageSize > 0 && item.value.recordCount > 0) {
		s += `${((item.value.page-1)*item.value.pageSize)+1} - ${(item.value.page*item.value.pageSize<item.value.recordCount)?item.value.page*item.value.pageSize:item.value.recordCount} arası, Toplam: ${item.value.recordCount} kayit, ${item.value.pageCount} sayfa`
	} else {
		s += `Toplam: ${item.value.recordCount} kayit`
	}
	s += `</div>`

	return s
}

function gridPagerButtons(item) {
	if(!item.value.page)
		return ''
	if((item.value.pageCount || 0) <= 1)
		return ''

	var s = `
	<ul class="pagination mb-1">`
	if(item.value.page > 1) {
		s += `<li class="page-item"><a class="page-link" href="${menuLink(hashObj.path,pageNo(1))}">|&lt;</a></li>
		<li class="page-item"><a class="page-link" href="${menuLink(hashObj.path,pageNo(item.value.page-1))}">&lt;</a></li>`
	}

	var sayfalar = pagination(item.value.page, item.value.pageCount)
	sayfalar.forEach((e) => {
		if(e == item.value.page.toString()) {
			s += `<li class="page-item active"><span class="page-link">${item.value.page}</span></li>`
		} else if(e == '...') {
			s += `<li class="page-item"><span class="page-link">...</span></li>`
		} else {
			s += `<li class="page-item"><a class="page-link" href="${menuLink(hashObj.path,pageNo(e))}">${e}</a></li>`
		}
	})

	if(item.value.page < item.value.pageCount) {
		s += `<li class="page-item"><a class="page-link" href="${menuLink(hashObj.path,pageNo(item.value.page+1))}">&gt;</a></li>
		<li class="page-item"><a class="page-link" href="${menuLink(hashObj.path,pageNo(item.value.pageCount))}">&gt;|</a></li>`
	}

	s += `</ul>`
	return s

	function pageNo(page) {
		var query = clone(hashObj.query)
		query['page'] = page
		return query
	}
}

function gridDefaults(item, insideOfModal) {
	if(item.level == undefined)
		item.level = 0
	if(item.id == undefined && item.level == 0) {
		rootGridId++
		item.id = `rootGrid${rootGridId}`
	}
	item = gridButtonOptions(item, insideOfModal)
	let optShow = {}

	if(item.level > 0) {
		optShow = {
			filter: false,
			pageSize: false,
			pageCount: false,
			pagerButtons: false,
			header: true,
			footer: false
		}
	} else {
		optShow = {
			filter: true,
			pageSize: true,
			pageCount: true,
			pagerButtons: true,
			header: true,
			footer: true
		}
	}
	item.options.show = Object.assign({}, optShow, item.options.show)
	if(item.options.show.infoRow == undefined) {
		if(item.level == 0 && (item.options.show.filter || item.options.show.pageSize || item.options.show.pageCount || item.options.show.pagerButtons)) {
			item.options.show.infoRow = true
		} else {
			item.options.show.infoRow = false
		}
	}
	item.options.show.filterRow = item.options.filter || false


	if(item.level > 0)
		item.options.show.filterRow = false

	if(item.options.show.filterRow) {
		var bFound = false
		Object.keys(item.fields).forEach((key) => {
			if(item.fields[key].filter == undefined) {
				item.fields[key].filter = true
			}

			if(item.fields[key].filter === true) {
				bFound = true
				return
			}

		})
		if(bFound == false) {
			item.options.show.filterRow = false
		}
	}

	item.value = objectArrayControl(item.value)
	return item
}

function gridModalAddRow(tableId, insideOfModal) {
	gridModalEditRow(tableId, -1, insideOfModal)
}

function gridModalEditRow(tableId, rowIndex, insideOfModal) {

	let table = document.querySelector(tableId)
	let item = table.item

	$(`#modalRow .modal-body`).html('')


	var gridLine = {}

	if(item.modal) {
		gridLine = clone(item.modal)
	} else {
		gridLine = {
			fields: clone(item.fields || {})
		}
	}

	gridLine.id = item.id
	gridLine.type = "modal"
	gridLine.options = { autocol: true }

	if(rowIndex >= 0) {
		gridLine.value = table.item.value[rowIndex]
		$(`#modalRow .modal-title`).html(`<i class="fas fa-edit"></i> #${rowIndex+1} satırını düzenle`)
	} else {
		gridLine.value = {}
		$(`#modalRow .modal-title`).html('<i class="far fa-plus-square"></i> Yeni satir')
		Object.keys(item.fields).forEach((key, cellIndex) => {
			var field = item.fields[key]

			if(field.lastRecord) {
				if(table.item.value.length > 0) {
					gridLine.value[key] = getPropertyByKeyPath(table.item.value[table.item.value.length - 1], key)
				}
			}

			if(field.type == 'identity') {
				gridLine.value[key] = item.value.length + 1
			}
		})
	}


	generateControl(`#modalRow .modal-body`, gridLine, gridLine.value, true, () => {
		editRowCalculation(`#modalRow .modal-body`, '', table.item.fields)
	})

	$(`#modalRow .modal-footer`).html(`<a class="btn btn-primary" href="javascript:gridModalOK('${tableId}',${rowIndex},${insideOfModal})" title="Kaydet"><i class="fas fa-check"></i> Tamam</a><button class="btn btn-secondary" type="button" data-bs-dismiss="modal">Vazgeç</button>`)



	$(`#modalRow`).modal('show')

}

function gridModalOK(tableId, rowIndex, insideOfModal) {
	var table = document.querySelector(tableId)

	var satirObj = getDivData(`#modalRow .modal-body`, '', false)

	if(rowIndex > -1) {
		table.item.value[rowIndex] = satirObj
	} else {
		table.item.value.push(satirObj)
	}
	gridBody(`${tableId}`, table.item, insideOfModal, () => {})

	if(typeof formCalc == 'function') formCalc(tableId)
	$(`#modalRow`).modal('hide')
}

function grid_onchange(item) {
	try {
		if(!item)
			return
		if(document.querySelector(`${item.pageFormId} #${item.id}`)) {
			if(document.querySelector(`${item.pageFormId} #${item.id}`).item) {
				if(item.onchange) {
					var onchange = item.onchange
					if(onchange.indexOf('this.value') > -1) {
						onchange = onchange.replace('this.value', `document.querySelector('${item.pageFormId} #${item.id}').item.value`)
						eval(onchange)
					} else if(onchange.indexOf('this') > -1) {
						onchange = onchange.replace('this', `document.querySelector('${item.pageFormId} #${item.id}').item`)
						eval(onchange)
					} else {
						eval(onchange)
					}
				}
			}
		}
	} catch (tryErr) {
		alertX(`${tryErr.name || ''} - ${tryErr.message || ''}`, 'Hata', 'danger')
	}
}


function gridSatirSil(tableId, rowIndex, insideOfModal) {
	var table = document.querySelector(`${tableId}`)
	if(rowIndex > -1) {
		if(table.item.options.confirmBeforeRemove) {
			confirmX(`#${rowIndex+1} nolu Satiri silmek istiyor musunuz?`, (answer) => {
				if(answer) {
					table.item.value.splice(rowIndex, 1)
					gridBody(`${tableId}`, table.item, insideOfModal, () => {})
					if(typeof formCalc == 'function') formCalc(tableId)
				}
			})
		} else {
			table.item.value.splice(rowIndex, 1)
			gridBody(`${tableId}`, table.item, insideOfModal, () => {})
			if(typeof formCalc == 'function') formCalc(tableId)
		}

	}
}

function ilkElemanaFocuslan(selector) {

	var ilkEleman = document.querySelector(`${selector}`).querySelector('input,select')
	if(ilkEleman) {
		ilkEleman.focus()
		if(typeof ilkEleman.select === 'function') {
			if(ilkEleman.getAttribute('readonly') != undefined || ilkEleman.getAttribute('disabled') != undefined) {
				enterNext(ilkEleman)
			} else {
				ilkEleman.select()
			}
		}
	}
}

function gridDeleteItem(rowIndex, tableId) {
	var table = document.querySelector(tableId)
	var item = table.item
	if(!item.dataSource)
		return
	if(!item.value)
		return

	var row = table.querySelectorAll('tbody tr')[rowIndex]
	var listItem
	if(Array.isArray(item.value)) {
		listItem = item.value[rowIndex]
	} else if(item.value.docs) {
		listItem = item.value.docs[rowIndex]
	}

	if(!row)
		return


	var soru = `Belge/Kayıt silinecektir! Onaylıyor musunuz?`
	var i = 0
	soru += `<br><hr class="hr-primary">`
	while(i < row.cells.length && i < 4) {
		if(row.cells[i].innerText.trim() != '') {
			soru += `${row.cells[i].innerHTML.trim()}<br>`
		}
		i++
	}

	var url = ''
	if(item.dataSource.deleteUrl) {
		url = item.dataSource.deleteUrl.split('?')[0]
		if(url.indexOf('{_id}') < 0) {
			url += `/{_id}`
		}
	} else {
		url = item.dataSource.url.split('?')[0]
		url += `/{_id}`
	}
	url = replaceUrlCurlyBracket(url, listItem)

	confirmX(soru, 'danger', (answer) => {
		if(!answer)
			return
		$.ajax({
			url: url,
			type: 'DELETE',
			success: function(result) {
				if(result.success) {
					window.onhashchange()
				} else {
					showError(result.error)
				}
			},
			error: function(err) {
				showError(err)
			}
		})
	})
}

function gridCopyItem(rowIndex, tableId) {
	let table = document.querySelector(tableId)
	let item = table.item
	if(!item.dataSource)
		return
	if(!item.value)
		return


	let listItem
	if(Array.isArray(item.value)) {
		listItem = item.value[rowIndex]
	} else if(item.value.docs) {
		listItem = item.value.docs[rowIndex]
	}


	if(item.dataSource.copyUrl) {
		url = item.dataSource.copyUrl.split('?')[0]
		if(url.indexOf('{_id}') < 0) {
			url += `/{_id}`
		}
	} else {
		url = item.dataSource.url.split('?')[0]
		url += `/copy/{_id}`
	}
	url = replaceUrlCurlyBracket(url, listItem)

	let name = ''
	let nameTitle = ''
	let key = ''
	let placeholder = ''
	if(item.fields['name']) {
		key = 'name'
		name = listItem['name'] || ''
		nameTitle = item.fields['name'].text || ''
	} else if(item.fields['name.value']) {
		key = 'name.value'
		name = getPropertyByKeyPath(listItem, 'name.value') || ''
		nameTitle = item.fields['name.value'].text || ''
	} else if(item.fields['ID']) {
		key = 'ID'
		name = listItem['ID'] || ''
		nameTitle = item.fields['ID'].text || ''
	} else if(item.fields['ID.value']) {
		key = 'ID.value'
		name = getPropertyByKeyPath(listItem, 'ID.value') || ''
		nameTitle = item.fields['ID.value'].text || ''
	}

	if(name == '') {
		Object.keys(item.fields).forEach((k) => {
			if(name == '' && item.fields[k].type == 'string' && item.fields[k].readonly !== true && item.fields[k].visible !== false) {
				key = k
				name = getPropertyByKeyPath(listItem, k)
				nameTitle = item.fields[key].text || ''
			}
		})
	}
	if(key == 'ID' || key == 'ID.value') {
		name = ''
		placeholder = 'Boş ise otomatik verilir'
	} else {
		name += ' kopya'
	}

	copyX({
		newName: { title: `Yeni ${nameTitle}`, type: 'string', value: `${name}`, placeholder: `${placeholder}` }
	}, 'Kopya oluştur', (answer, formData) => {
		if(!answer)
			return
		$.ajax({
			url: url,
			data: formData,
			type: 'POST',
			success: function(result) {
				if(result.success) {
					if(result.data['newName']) {
						alertX(`Yeni ad/kod:<br> <b>${result.data['newName']}</b>`, 'Kopyalama başarılı', (answer) => {
							window.onhashchange()
						})
					} else {
						window.onhashchange()
					}

				} else {
					showError(result.error)
				}
			},
			error: function(err) {
				showError(err)
			}
		})
	})
}

function gridCSVExport(gridId) {

	var grid = document.querySelector(`#${gridId}`)
	var thead = document.querySelector(`#${gridId} table thead`)
	var tbody = document.querySelector(`#${gridId} table tbody`)
	var item = grid.item
	var s = ``
	var i = 0,
		j = 0
	while(j < thead.rows[0].cells.length) {
		if(item.options.selection && j == 0) {

		} else {
			if(!thead.rows[0].cells[j].classList.contains('hidden')) {
				s += '"' + thead.rows[0].cells[j].innerText + '";'
			}

		}

		j++
	}

	s += '\r\n'

	while(i < tbody.rows.length) {
		j = 0
		while(j < tbody.rows[i].cells.length) {
			if(item.options.selection && j == 0) {

			} else {
				if(!tbody.rows[i].cells[j].classList.contains('hidden'))
					s += '"' + tbody.rows[i].cells[j].innerText.replaceAll('\r\n', ' ').replaceAll('\n', ' ') + '";'
			}

			j++
		}
		s += '\r\n'

		i++
	}
	var fileName = (document.text || '').split('-')[0].trim() + '.csv'

	var blob = new Blob([String.fromCharCode(0xFEFF), s], { type: "text/plain;charset=utf-8", autoBom: true })
	saveAs(blob, fileName)
}
},{}],4:[function(require,module,exports){
(function (global){(function (){
var rootGridId = 0
var remoteList = {}
let bSayfaAciliyor = false



function findPageObject() {
	document.title = hashObj.title + ' - GanyGO'
	$('#pageTitle').html(`<i class="${hashObj.icon}"></i> ${hashObj.breadCrumbsHtml}`)
	var sayfa = getPropertyByKeyPath(global.pages, hashObj.pathKey)
	if(!sayfa)
		return null
	var resp
	switch (hashObj.func) {
		case 'edit':
			resp = sayfa.edit || sayfa.form
			break
		case 'view':
			resp = sayfa.view || sayfa.edit || sayfa.form || null
			break
		case 'print':
			resp = sayfa.print || sayfa.edit || sayfa.form || null
			break
		case 'addnew':
			resp = sayfa.addnew || sayfa.form || null
			break

		case '':
		case 'index':
			resp = sayfa.index || null
			break
		default:
			resp = sayfa[hashObj.func] || null
			break
	}
	return resp
}



function publishPage(divId,before,after) {
	if(bSayfaAciliyor)
		return
	if(before) before()
	let sayfa = findPageObject()
	if(sayfa) {

		generatePage(divId, sayfa, () => {
			bSayfaAciliyor = false
			if(after) after()
		})

	} else {
		$(divId).html('sayfa bulunamadi')
		bSayfaAciliyor = false
		if(after) after()
	}
}


function generatePage(divId, pageJson, callback) {
	$(divId).html('')
	$(divId).hide()
	//	try {
	let dizi = []
	if(Array.isArray(pageJson)) {
		dizi = pageJson
	} else {
		dizi.push(pageJson)
	}


	let index = 0
	rootGridId = 0
	remoteList = {}

	function calistir(cb) {
		if(index >= dizi.length) {
			return cb()
		}

		let pageSubObj = clone(dizi[index])
		pageSubObj.level = 0


		headerButtons(divId, pageSubObj)
		// appendLinkedScript(divId, '/js/order-helper.js')
		// appendScript(divId, `<script type="text/javascript">function formCalc(tableId) { calculateOrder('${divId}',tableId) }</script>`)

		// appendScript(divId, pageSubObj.script)
		getRemoteData(pageSubObj, (err, data) => {
			if(!err) {
				switch ((pageSubObj.type || '')) {
					case 'filter':
						generateControl(divId, pageSubObj, data, false, (err) => {
							if(!err) {
								document.querySelector(`${divId} #filterForm`).insertAdjacentHTML('beforeend', `${filterFormButton('#filterForm')}`)
							}
							index++
							setTimeout(calistir, 0, cb)
						})
						break



					case 'grid':
						generateControl(divId, pageSubObj, data, false, (err) => {
							index++
							setTimeout(calistir, 0, cb)
						})
						break

					default:
						generateControl(divId, pageSubObj, data, false, (err) => {
							index++
							setTimeout(calistir, 0, cb)
						})
						break
						// default:

						// index++
						// setTimeout(calistir,0,cb)
						// break
				}
			} else {
				cb(err)
			}
		})
	}

	calistir((err) => {
		if(err) {
			$(divId).html(`Hata1:${err.code || err.name || ''} ${err.message || ''}`)
			if(err.code == 'SESSION_NOT_FOUND') {
				confirmX('Oturum sonlandırılmış. Yeniden giriş yapmak istiyor musunuz?', (answer) => {
					if(answer) {
						window.location.href = `/login?ret=${window.location.href}`

					}
					if(callback)
						return callback()
				})
			}
		}
		loadCardCollapses()
		$(document).trigger('loaded')
		$(divId).show()
		if(callback)
			return callback()
	})
	// } catch (tryErr) {
	// 	console.error(tryErr)
	// 	$(divId).html(`Hata2:${tryErr.name || ''} ${tryErr.message || ''}`)
	// 	$(divId).show()
	// 	if(callback)
	// 		return callback()
	// }
}


function headerButtons(divId, pageSubObj) {
	let hbtn = ``
	if(pageSubObj.type == 'form') {
	
		hbtn = `
		<button id="headerButtonSave" class="btn btn-outline-primary btn-form-header ms-2" title="Kaydet"><i class="fas fa-save"></i></button>
		<a href="javascript:history.back(-1)" class="btn btn-outline-dark  btn-form-header ms-2" title="Vazgeç"><i class="fas fa-reply"></i></a>`

		if(pageSubObj.options) {
			if(pageSubObj.options.mode == 'view') {
				hbtn = `<a href="javascript:history.back(-1)" class="btn btn-outline-dark  btn-form-header ms-2" title="Vazgeç"><i class="fas fa-reply"></i></a>`
			}
		}
	}

	$('#headerButtons').html(hbtn)

	$('#headerButtonSave').on('click', () => {
		formKaydet(pageSubObj.dataSource, divId)
	})
}

function generateControl(divId, item, data, insideOfModal, callback) {
	let autocol = item.options ? (item.options.autocol === true ? true : false) : false
	let queryValues = item.options ? (item.options.queryValues === true ? true : false) : false

	if(item.type == 'widget') {
		item = generateWidget(item)
	}


	item = itemLevels(item, item.level)
	item = itemHtmlCode(item)

	if(item.level == 0) item.pageFormId = divId

	if(item.script) {
		$(divId).append(`<script type="text/javascript">${item.script}</script>`)
		//document.querySelector(divId).insertAdjacentHTML('afterbegin', `<script type="text/javascript">${item.script}</script>`)
	}

	if(item.fields) {
		Object.keys(item.fields).forEach((key) => {

			item.fields[key].field = key
			item.fields[key].pageFormId = item.pageFormId || ''
			item.fields[key] = itemDefaultValues(item.fields[key], autocol, insideOfModal, queryValues)

			if(item.fields[key].type == 'grid') {
				item.fields[key].parentField = key
			} else if(item.fields[key].type == 'widget') {

			}
		})
	} else if(item.tabs) {
		item.tabs.forEach((tab) => {
			tab.pageFormId = item.pageFormId || ''

			if(tab.fields) {
				Object.keys(tab.fields).forEach((key) => {
					tab.fields[key].field = key
					tab.fields[key] = itemDefaultValues(tab.fields[key], autocol, insideOfModal, queryValues)
					tab.fields[key].pageFormId = tab.pageFormId || ''
					if(tab.fields[key].type == 'grid') {

						tab.fields[key].parentField = key

					}
				})
			}
		})
	} else {
		item = itemDefaultValues(item, autocol, insideOfModal, queryValues)
	}

	item.insideOfModal = insideOfModal


	switch ((item.type || '').toLowerCase()) {

		case 'hidden':
			item.value = getPropertyByKeyPath(data, item.field, item.value)
			frm_InputHidden(divId, item, cb)
			break
		case 'string':
			item.value = getPropertyByKeyPath(data, item.field, item.value) || ''
			frm_TextBox(divId, item, cb)
			break
		case 'number':
			item.value = getPropertyByKeyPath(data, item.field, item.value)
			if(item.value == undefined) {
				item.value = 0
			}
			frm_NumberBox(divId, item, cb)
			break

		case 'money':
		case 'quantity':
		case 'amount':
		case 'price':
			if(item.class.indexOf('text-end') < 0)
				item.class += ' text-end'
			if(item.readonly) {
				let buf = getPropertyByKeyPath(data, item.field, item.value) || 0
				item.value = Number(buf).formatMoney(item.round || 2)
				frm_FormattedNumberBox(divId, item, cb)
			} else {
				item.value = getPropertyByKeyPath(data, item.field, item.value) || 0
				frm_FormattedNumberBox(divId, item, cb)
			}
			break

		case 'total':
			if(item.class.indexOf('text-end') < 0)
				item.class += ' text-end'
			if(item.readonly) {
				let buf = getPropertyByKeyPath(data, item.field, item.value) || 0
				item.value = Number(buf).formatMoney(item.round || 2)


				frm_TotalBox(divId, item, cb)
			} else {
				item.value = getPropertyByKeyPath(data, item.field, item.value) || 0

				frm_TotalBox(divId, item, cb)
			}
			break

		case 'identity':
			item.value = getPropertyByKeyPath(data, item.field, item.value) || 0
			item.readonly = true
			frm_NumberBox(divId, item, cb)
			break
		case 'date':
			item.value = getPropertyByKeyPath(data, item.field, item.value) || ''
			frm_DateBox(divId, item, cb)
			break
		case 'time':
			item.value = getPropertyByKeyPath(data, item.field, item.value) || ''
			frm_TimeBox(divId, item, cb)
			break
		case 'filebase64image':
		case 'image':
			item.value = getPropertyByKeyPath(data, item.field, item.value) || ''
			frm_ImageBox(divId, item, cb)
			break
		case 'filebase64':
		case 'file':
			item.value = getPropertyByKeyPath(data, item.field, item.value) || ''
			frm_FileBox(divId, item, cb)
			break
		case 'strings':
		case 'textarea':
			item.value = getPropertyByKeyPath(data, item.field, item.value) || ''
			frm_TextareaBox(divId, item, cb)
			break
		case 'code':
			item.rows = item.rows || 40
			item.encoding = item.encoding || 'base64'
			item.value = getPropertyByKeyPath(data, item.field, item.value) || ''
			frm_TextareaBox(divId, item, cb)
			break
		case 'json':
			item.rows = item.rows || 40
			item.encoding = item.encoding || 'base64'
			item.value = getPropertyByKeyPath(data, item.field, item.value) || ''
			frm_TextareaBox(divId, item, cb)
			break
		case 'button':
			item.value = getPropertyByKeyPath(data, item.field, item.value) || ''
			frm_Button(divId, item, cb)
			break
		case 'lookup':
			item.value = getPropertyByKeyPath(data, item.field, item.value) || ''
			frm_Lookup(divId, item, cb)
			break
		case 'html':
			item.value = getPropertyByKeyPath(data, item.field, item.value) || ''
			frm_FormHtml(divId, item, cb)
			break
		case 'label':
			item.value = getPropertyByKeyPath(data, item.field, item.value) || ''
			frm_Label(divId, item, cb)
			break
		case 'remotelookup':
			item.value = getPropertyByKeyPath(data, item.field, item.value)
			if(item.lookupTextField) {
				item.valueText = getPropertyByKeyPath(data, item.lookupTextField) || item.valueText || ''
			}
			frm_RemoteLookup(divId, item, cb)
			break
		case 'boolean':
			item.value = getPropertyByKeyPath(data, item.field, item.value) || ''
			frm_CheckBox(divId, item, cb)
			break
		case 'daterange':
			frm_DateRangeBox(divId, item, cb)
			break
		case 'w-100':
		case 'w100':
		case 'divisor':
			document.querySelector(divId).insertAdjacentHTML('beforeend', `<div class="w-100"></div>`)
			cb()
			break
		case 'grid':

			if(item.level == 0) {

				item.value = data
				grid(divId, item, insideOfModal, cb)
			} else {
				item.value = getPropertyByKeyPath(data, item.field, [])
				grid(divId, item, insideOfModal, cb)

				// let orjinalId = item.id
				// item.id = `card-${item.id}`

				// frm_Card(divId, item, () => {
				// 	item.value = getPropertyByKeyPath(data, item.field, [])
				// 	item.id = orjinalId
				// 	grid(`${divId} #card-${item.id}`, item, insideOfModal, cb)
				// })
			}



			break
		case 'filter':

			if(item.fields) {
				document.querySelector(divId).insertAdjacentHTML('beforeend', `<div class="col-12 p-0"><div id="filterForm" class="row m-0"></div></div>`)

				let dizi = Object.keys(item.fields)
				let index = 0

				function calistir1(cb1) {
					if(index >= dizi.length) {
						cb1()
					} else {
						let key = dizi[index]
						item.fields[key].value = hashObj.query[key] || item.fields[key].value || ''
						item.fields[key].showAll = true
						item.fields[key].class = 'my-3 my-md-0'

						generateControl('#filterForm', item.fields[key], data, insideOfModal, () => {
							index++
							setTimeout(calistir1, 0, cb1)
						})
					}
				}

				calistir1(cb)

			} else {
				cb()
			}
			break
		case 'widgetcontrol':
		case 'tab':
		case 'form':
		case 'group':
		case 'modal':
			let dizi = []
			let index = 0

			function calistir2(fields, connDivId, cb1) {
				if(index >= dizi.length) {
					return cb1()
				}
				let key = dizi[index]

				generateControl(connDivId, fields[key], data, insideOfModal, () => {
					index++
					setTimeout(() => {
						calistir2(fields, connDivId, cb1)
					}, 0)
				})
			}


			if(item.fields) {
				dizi = Object.keys(item.fields)
				index = 0
				if(item.level == 0 || item.type == 'modal' || item.type == 'form') {
					if(document.querySelector(divId).classList.contains('row') == false) {
						document.querySelector(divId).insertAdjacentHTML('beforeend', `<div class="row m-0"></div>`)
						calistir2(item.fields, `${divId} .row`, callback)
					} else {
						calistir2(item.fields, `${divId}`, callback)
					}

				} else if(item.type == 'widgetControl') {
					if(item.grouped === true) {
						let orjinalId = item.id
						item.id = 'card-' + item.id
						frm_Card(divId, item, () => {
							calistir2(item.fields, `${divId} #${item.id}`, callback)
						})
					} else {
						calistir2(item.fields, divId, callback)
					}

				} else {
					let orjinalId = item.id
					item.id = 'card-' + item.id
					frm_Card(divId, item, () => {
						calistir2(item.fields, `${divId} #${item.id}`, callback)
					})
				}
			} else if(item.tabs) {
				item.id = item.id || 'tabForm'
				item.tabs.forEach((tab, tabIndex) => {
					tab.id = tab.id || `${item.id}_tab${tabIndex}`
				})

				frm_Tab(divId, item, () => {
					let tabIndex = 0

					function calistirTab(cb1) {
						if(tabIndex >= item.tabs.length) {
							return cb1()
						}
						let tab = item.tabs[tabIndex]
						if(tab.fields) {
							dizi = Object.keys(tab.fields)
							index = 0
							calistir2(tab.fields, `${divId} #${tab.id}`, () => {
								tabIndex++
								setTimeout(calistirTab, 0, cb1)
							})
						} else {
							tabIndex++
							setTimeout(calistirTab, 0, cb1)
						}
					}

					calistirTab(callback)
				})
			}


			break

		default:
			item.value = getPropertyByKeyPath(data, item.field, item.value) || ''
			frm_TextBox(divId, item, cb)
			break
	}


	function cb() {
		if(item.html) {
			console.log(`item.html:`, item.html)
			document.querySelector(divId).insertAdjacentHTML('beforeend', item.html)
		}
		callback()
	}
}



function itemLevels(item, level = 0) {
	if(Array.isArray(item)) {
		item.forEach((e) => {
			e = itemLevels(e, level + 1)
		})
		return item
	} else if(typeof item == 'object' && item != null) {
		item.level = level
		if(item.fields != undefined) {
			Object.keys(item.fields).forEach((key) => {
				item.fields[key] = itemLevels(item.fields[key], level + 1)
			})
		}
		if(item.modal != undefined) {
			item.modal = itemLevels(item.modal, level + 1)
		}
		if(item.tabs != undefined) {
			item.tabs.forEach((tab) => {
				tab.level = level
				tab = itemLevels(tab, level)
			})
		}
		return item
	} else {
		return item
	}
}

function generateWidget(item) {
	if(!item.widget)
		return item
	if(!global.widgets[item.widget])
		return item

	let prefix = item.prefix || ''
	cloneWidget = clone(global.widgets[item.widget])
	cloneWidget.level = item.level
	let widget = widgetPrefixDuzelt(cloneWidget, { prefix: prefix })
	widget = Object.assign({}, widget, item)
	widget.type = 'widgetControl'
	return widget
}

function widgetPrefixDuzelt(itemWidget, valueObj) {
	if(!itemWidget.fields)
		return itemWidget
	let obj = { level: itemWidget.level }

	Object.keys(itemWidget).forEach((key) => {
		if(key != 'fields') {
			obj[key] = clone(itemWidget[key])
		}
	})


	obj.fields = {}
	Object.keys(itemWidget.fields).forEach((key) => {
		let yeniKey = htmlEval(key, valueObj)
		if(itemWidget.fields[key].fields != undefined) {
			obj.fields[yeniKey] = widgetPrefixDuzelt(itemWidget.fields[key], valueObj)
			obj.fields[yeniKey].level = obj.level + 1
		} else {
			obj.fields[yeniKey] = itemWidget.fields[key]
			if(typeof obj.fields[yeniKey] == 'object') {
				obj.fields[yeniKey].level = obj.level + 1
			}
			Object.keys(itemWidget.fields[key]).forEach((key2) => {
				if(key2 != 'fields') {
					itemWidget.fields[key][key2] = htmlEval(itemWidget.fields[key][key2], valueObj)
				}
			})
		}

	})
	return obj
}


function filterFormButton(divId) {
	var s = `
	<div class="col text-end p-1 pt-2 ">
	<a href="javascript:runFilter('${divId}')" class="btn btn-outline-primary text-nowrap filter-button" title="Filtrele" ><i class="fas fa-sync-alt"><i class="fas fa-filter ms-2"></i></i></a>
	</div>
	`

	return s
}

function itemDefaultValues(item, autocol = false, insideOfModal = false, queryValues = false) {
	var field = item.field || ''

	var lookupTextField = item.lookupTextField || ''
	if(item.parentField) {
		field = `${item.parentField}.${field}`
	}
	if(item.lookupTextField) {
		var lookupTextField = item.lookupTextField
		if(item.parentField) {
			lookupTextField = `${item.parentField}.${item.lookupTextField}`
		}
		item.lookupTextFieldId = generateFormId(lookupTextField)
		item.lookupTextFieldName = generateFormName(lookupTextField)

	}
	item.id = generateFormId(field)

	item.name = generateFormName(field)
	item.text = item.text || ''
	item.icon = item.icon || ''
	// if(item.title!='')
	// 	item.title=item.title.replace(/&/gim, '&amp;').replace(/</gim, '&lt;').replace(/>/gim, '&gt;')


	item.type = item.type || ''

	if(item.type == '' && item.fields) {

		item.type = 'group'
	}
	if(item.type == '' && item.tabs) {
		item.type = 'tab'
	}

	if(!isNaN(item.col)) {
		item.col = 'col-md-' + item.col
	} else {
		if(autocol) {
			switch ((item.type || '').toLowerCase()) {
				case 'identity':
					item.col = 'col-md-1'
					break
				case 'number':
				case 'money':
				case 'amount':
				case 'quantity':
				case 'price':
					item.col = 'col-md-2'
					break
				case 'remotelookup':
					item.col = 'col-md-6'
					break
				case 'lookup':
					item.col = 'col-md-2'
					if(maxLookupLength(item.lookup || {}) > 30) {
						item.col = 'col-md-4'
					}
					break
				case 'boolean':
					item.col = 'col-md-2'
					break
				case 'grid':
					item.col = 'col-md-12'
					break
				default:
					item.col = 'col-md-4'
					break
			}
		} else {
			if(item.type.toLowerCase() == 'daterange') {
				item.col = item.col || 'col-md-auto'
			} else {
				item.col = item.col || 'col-md-12'
			}

		}
	}


	item.required = item.required == undefined ? false : item.required
	item.visible = item.visible == undefined ? true : item.visible
	item.collapsed = item.collapsed == undefined ? false : item.collapsed


	item.lookup = item.lookup || {}

	if(item.staticValues) {
		item.lookup = global.staticValues[item.staticValues] || {}
	}
	item.class = item.class || ''
	item.readonly = item.readonly || false


	if(item.noGroup === true && !item.placeholder) {
		item.placeholder = item.text
	}


	item.insideOfModal = insideOfModal
	item.dataType = item.dataType || item.type || 'unknown'
	if(!item.value) {

		if(queryValues) {
			item.value = hashObj.query[item.field] || ''
		} else if(item.dataType == 'date') {
			item.value = (new Date()).yyyymmdd()
		} else if(item.dataType == 'time') {
			item.value = (new Date()).hhmmss()
		} else if(item.lastRecord === true) {
			var lastRecord = pageSettings.getItem('lastRecord')
			if(lastRecord) {
				item.value = getPropertyByKeyPath(lastRecord, item.field, item.value)
			}

		}
	}

	try {
		switch (item.dataType) {
			case 'total':
				item.round = item.round || global.numberFormats.amount.round || 2
				break
			case 'amount':
				item.round = item.round || global.numberFormats.amount.round || 2
				break
			case 'price':
				item.round = item.round || global.numberFormats.price.round || 5
				break
			case 'quantity':
				item.round = item.round || global.numberFormats.quantity.round || 3
				break
			case 'money':
				item.round = item.round || global.numberFormats.money.round || 2
				break
			default:
				item.round = item.round || 2
				break
		}
	} catch {}

	return item
}

function itemHtmlCode(item) {
	if(item.html) {
		let htmlString = ''
		if(Array.isArray(item.html)) {
			item.html.forEach((e) => {
				htmlString += e + '\n'
			})
		} else {
			htmlString = item.html
		}

		item.html = replaceUrlCurlyBracket(htmlString, item) || ''
	}
	if(item.script) {
		let scriptString = ''
		if(Array.isArray(item.script)) {
			item.script.forEach((e) => {
				scriptString += e + '\n'
			})
		} else {
			scriptString = item.script
		}
		item.script = scriptString
	}
	if(item.stylesheet) {
		if(!Array.isArray(item.stylesheet)) {
			item.stylesheet = [item.stylesheet]
		}
	}
	return item
}

function formKaydet(dataSource, divId) {


	let numberInputs = document.querySelectorAll(`${divId} .formatted-number`)
	let i = 0
	while(i < numberInputs.length) {
		let e = numberInputs[i]
		let sbuf = e.value
		e.attributes.type = 'number'
		e.value = convertNumber(sbuf)
		i++
	}

	let formData = getFormData(`${divId}`)
	formSave(dataSource, formData)

}

function itemLabelCaption(item, text = '') {
	if(item.required === true) {
		return `<span class="label-required">*${text || item.text || ''}</span>`
	} else {
		return (text || item.text || '')
	}
}
}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],5:[function(require,module,exports){
var global = {
	version: '',
	staticValues: {},
	pages: {},
	widgets: {},
	javascripts: {},
	menu: [],
	databases: [],
	dbId: '',
	dbName: '',
	// sessionId:'',
	token: '',
	ispiyonServiceUrl: '',
	settings: [],
	formOptionsLink: '',
	numberFormats: {
		money: { round: 2 },
		amount: { round: 2 },
		quantity: { round: 3 },
		price: { round: 4 }
	}
}

function initHahamGlobals() {
	try {
		if(localStorage.getItem('global')) {
			global = Object.assign({}, global, JSON.parse(localStorage.getItem('global')))
		}
	} catch (e) {
		localStorage.removeItem('global')
	}
}

initHahamGlobals()
initIspiyonService()

var hashObj = getHashObject()

function getHashObject() {
	if(window.location.hash == '')
		return {}

	var hash = window.location.hash.substr(1)
	var queryString = hash.split('?')[1] ? hash.split('?')[1] : ''
	var dizi = hash.split('?')[0].split('/')
	dizi.splice(0, 1)

	var h = {
		path: dizi.length > 1 ? `/${dizi[0]}/${dizi[1]}` : '',
		pathKey: dizi.length > 1 ? `${dizi[0]}.${dizi[1]}` : '',
		func: dizi.length > 2 ? dizi[2] : '',
		id: dizi.length > 3 ? dizi[3] : '',
		param1: dizi.length > 4 ? dizi[4] : '',
		param2: dizi.length > 5 ? dizi[5] : '',
		param3: dizi.length > 6 ? dizi[6] : '',
		query: {},
		queryString: queryString,
		module: '',
		icon: '',
		title: '',
		funcTitle: '',
		breadCrumbs: '',
		breadCrumbsHtml: '',
		settings: {}
	}
	if(h.path && h.func == '') {
		h.func = 'index'
	}

	if(queryString) {

		h.query = getAllUrlParams(queryString)
	}
	var p = getPageInfos(h)
	h = Object.assign({}, h, p)
	h['settings'] = getPageSettings(h.module)

	return h
}

function setHashObject(h) {
	var hashString = h.path || ''

	if(h.func != '' && h.func != 'index') {
		hashString += '/' + h.func
		if(h.id) {
			hashString += '/' + h.id
			if(h.param1) {
				hashString += '/' + h.param1
				if(h.param2) {
					hashString += '/' + h.param2
					if(h.param3) {
						h += '/' + h.param3
					}
				}
			}
		}
	}

	if(h.query) {
		var filterString = ''
		Object.keys(h.query).forEach((key) => {
			if(filterString != '')
				filterString += '&'
			filterString += `${key}=${encodeURIComponent2(h.query[key])}`
		})
		if(filterString != '') {
			hashString += `?${filterString}`
		}
	}

	window.location.hash = hashString
}

function getPageInfos(h = null) {
	var p = {
		module: '',
		icon: '',
		title: '',
		funcTitle: '',
		breadCrumbs: '',
		breadCrumbsHtml: ''

	}
	if(h == null) {
		h = hashObj
	}
	var breadCrumbs = []
	if((h.query.mid || '') == '') {
		breadCrumbs = getBreadCrumbsFromPath(global.menu, (h.path)) || []
	} else {
		breadCrumbs = getBreadCrumbs(global.menu, (h.query.mid)) || []
	}


	if(breadCrumbs.length > 0) {
		p.icon = breadCrumbs[breadCrumbs.length - 1].icon || ''
		p.title = breadCrumbs[breadCrumbs.length - 1].text || ''
		p.module = breadCrumbs[breadCrumbs.length - 1].module || ''

		if(h.func != '' && h.func != 'index') {
			switch (h.func) {
				case 'edit':
					p.funcTitle = 'Düzenle'
					break
				case 'addnew':
					p.funcTitle = 'Yeni'
					break
				case 'view':
					p.funcTitle = 'İzleme'
					break
				case 'print':
					p.funcTitle = 'Yazdır'
					break
				default:
					p.funcTitle = h.func
					break
			}
			breadCrumbs.push({ icon: '', text: p.funcTitle })
		}
		var sbuf = ''
		sbuf = breadCrumbs.length > 0 ? breadCrumbs[0].text : ''
		p.breadCrumbs += sbuf
		p.breadCrumbsHtml += breadCrumbs.length == 1 ? `<span class="font-weight-bold text-orange">${breadCrumbs[0].text}</span>` : sbuf

		sbuf = breadCrumbs.length > 1 ? ' \\ ' + breadCrumbs[1].text : ''
		p.breadCrumbs += sbuf
		p.breadCrumbsHtml += breadCrumbs.length == 2 ? ` \\ <span class="font-weight-bold text-orange">${breadCrumbs[1].text}</span>` : sbuf

		sbuf = breadCrumbs.length > 2 ? ' \\ ' + breadCrumbs[2].text : ''
		p.breadCrumbs += sbuf
		p.breadCrumbsHtml += breadCrumbs.length == 3 ? ` \\ <span class="font-weight-bold text-orange">${breadCrumbs[2].text}</span>` : sbuf

		sbuf = breadCrumbs.length > 3 ? ' \\ ' + breadCrumbs[3].text : ''
		p.breadCrumbs += sbuf
		p.breadCrumbsHtml += breadCrumbs.length == 4 ? ` \\ <span class="font-weight-bold text-orange">${breadCrumbs[3].text}</span>` : sbuf

		sbuf = breadCrumbs.length > 4 ? ' \\ ' + breadCrumbs[4].text : ''
		p.breadCrumbs += sbuf
		p.breadCrumbsHtml += breadCrumbs.length == 5 ? ` \\ <span class="font-weight-bold text-orange">${breadCrumbs[4].text}</span>` : sbuf

	}
	return p
}

function getModulePageName() {
	var pageName = 'page'
	var dizi = hashObj.path.split('/')
	var k = 0
	dizi.forEach((e) => {
		if(e != '') {
			if(k == 2) {
				return
			} else {
				pageName += '_' + e
				k++
			}
		}
	})

	return pageName
}


var pageSettings = {
	setItem: function(param, value) {
		try {
			var obj = JSON.parse(localStorage.getItem(`${getModulePageName()}`) || '{}')
			obj[param] = value
			localStorage.setItem(`${getModulePageName()}`, JSON.stringify(obj))
		} catch (err) {
			showError(err)
		}
	},
	getItem: function(param) {
		try {
			var obj = JSON.parse(localStorage.getItem(`${getModulePageName()}`) || '{}')
			if(obj[param] == undefined)
				obj[param] = null

			return obj[param]
		} catch (err) {
			showError(err)
			return null
		}

	}
}

function helpButton(item) {
	if((item.help || '') != '') {
		var helpUrl = item.help
		//manipulateUrl(item.help)

		return `<a href="javascript:openInNewTab('${helpUrl}')" class="skip-enter-next text-primary bold ms-2" title="Yardım ve açıklama için tıklayınız"><i class="far fa-question-circle"></i></a>`
	} else {
		return ''
	}
}

function maxLookupLength(lookup) {
	var max = 0
	Object.keys(lookup).forEach((key) => {
		if(lookup[key].length > max)
			max = lookup[key].length
	})
	return max
}

function generateFormName(name) {
	var keys = name.toString().split('.')
	if(keys.length <= 1) {
		return name
	} else {
		var s = ''
		keys.forEach((k, index) => {
			if(index == 0)
				s = k
			else
				s += `[${k}]`
		})
		return s
	}
}

function generateFormId(name) {
	if(typeof name == 'string')
		return name.replaceAll('.', '_')
	else
		return ''
}

function loadCardCollapses() {
	var kartlar = document.getElementsByClassName('card-collapse')
	var i = 0
	while(i < kartlar.length) {
		if(pageSettings.getItem(`collapse_${kartlar[i].id}`)) {
			$(`#${kartlar[i].id}`).collapse(pageSettings.getItem(`collapse_${kartlar[i].id}`))
		}
		i++
	}

	$('.card-collapse').on('show.bs.collapse', (e) => {
		pageSettings.setItem(`collapse_${e.target.id}`, e.type)

	})
	$('.card-collapse').on('hide.bs.collapse', (e) => {
		pageSettings.setItem(`collapse_${e.target.id}`, e.type)

	})

	$('.modal .card-collapse').on('show.bs.collapse', (e) => {
		pageSettings.setItem(`collapse_${e.target.id}`, e.type)
	})
	$('.modal .card-collapse').on('hide.bs.collapse', (e) => {
		pageSettings.setItem(`collapse_${e.target.id}`, e.type)
	})
}


function getAjax(url, labelStr = '{name}', exceptId = '', cb) {

	$.ajax({
		url: url,
		type: 'GET',
		dataType: 'json',
		success: function(result) {
			if(result.success) {
				var dizi = []

				if(result.data.docs != undefined) {
					result.data.docs.forEach((e) => {

						var text = replaceUrlCurlyBracket(labelStr, e)
						dizi.push({ label: text, value: text, obj: e })
					})
				} else {
					if(Array.isArray(result.data)) {
						result.data.forEach((e) => {
							var text = replaceUrlCurlyBracket(labelStr, e)
							dizi.push({ label: text, value: text, obj: e })
						})
					} else {
						var text = replaceUrlCurlyBracket(labelStr, result.data)
						dizi.push({ label: text, value: text, obj: result.data })
					}
				}

				if(cb)
					cb(null, dizi)
			} else {
				if(cb)
					cb(result.error)
			}
		},
		error: function(err) {
			if(cb)
				cb(err)
		}
	})
}


function remoteLookupAutocomplete(locals) {

	if(locals.dataSource == undefined)
		return

	var searchUrl = ''
	if((locals.dataSource.search || '') != '') {
		searchUrl = replaceUrlCurlyBracket(locals.dataSource.search, { _id: locals.value })

	} else if((locals.dataSource.url || '') != '') {
		searchUrl = replaceUrlCurlyBracket(locals.dataSource.url, { _id: locals.value })
		if(searchUrl.indexOf('?') < 0) {
			searchUrl += '?search={search}'
		} else {
			searchUrl += '&search={search}'
		}
	}
	var idUrl = ''
	if(locals.dataSource.id || locals.dataSource.idUrl) {
		idUrl = replaceUrlCurlyBracket(locals.dataSource.id || locals.dataSource.idUrl, { _id: locals.value })

	} else if(locals.dataSource.url) {
		idUrl = replaceUrlCurlyBracket(locals.dataSource.url, { _id: locals.value })
		if(idUrl.indexOf('?') < 0) {
			idUrl += `/${locals.value}`
		} else {
			idUrl += `&id=${locals.value}`
		}
	}


	if(searchUrl == '' || idUrl == '') {
		return
	}

	var labelStr = (locals.dataSource.label || '{name}')
	var valueText = locals.valueText || ''


	$(`#${locals.id}-autocomplete-text`).autocomplete({
		source: function(request, response) {
			var typedText = encodeURIComponent2(request.term)
			var url = searchUrl.replace('{search}', typedText).replace('{search}', typedText).replace('{mid}', q.mid)

			getAjax(url, `${labelStr}`, ``, (err, result) => {
				if(!err) {
					response(result)
				} else {
					console.error(err)
					response([])
				}
			})
		},
		select: function(event, ui) {
			$(`#${locals.id}-autocomplete-text`).val((ui.item.label || ''))
			$(`input[name="${locals.name}"]`).val(ui.item.obj._id.toString())
			$(`#${locals.id}-obj`).val(encodeURIComponent2(JSON.stringify(ui.item.obj)))
			if(locals.lookupTextField) {
				$(`input[name="${locals.lookupTextFieldName}"]`).val((ui.item.label || ''))
				$(`#${locals.id}-original-text`).html((ui.item.label || ''))
				$(`#${locals.id}-original-text`).attr('title', (ui.item.label || ''))
			}
			if(locals.onchange) {
				eval(`${locals.onchange}`)
			}
			return false
		}
	})


	$(`#${locals.id}-autocomplete-text`).on('change', () => {

		if($(`#${locals.id}-autocomplete-text`).val() == '') {
			$(`input[name="${locals.name}"]`).val('')
			$(`#${locals.id}-obj`).val('')
			if(locals.lookupTextField) {
				$(`#${locals.id}-original-text`).html('')
				$(`#${locals.id}-original-text`).attr('title', '')
			}
		}
		if(locals.lookupTextField) {
			$(`input[name="${locals.lookupTextFieldName}"]`).val($(`#${locals.id}-autocomplete-text`).val())
		}
	})


	if((locals.value || '') != '') {
		var url = idUrl.replace('{mid}', q.mid)
		getAjax(url, `${labelStr}`, ``, (err, result) => {
			if(!err) {
				if(result.length > 0) {
					if(valueText == '') {
						$(`#${locals.id}-autocomplete-text`).val((result[0].label || ''))
					}

					$(`input[name="${locals.name}"]`).val(result[0].obj._id.toString())
					$(`#${locals.id}-obj`).val(encodeURIComponent2(JSON.stringify(result[0].obj)))

					if(locals.lookupTextField) {
						$(`#${locals.id}-original-text`).html((result[0].label || ''))
						$(`#${locals.id}-original-text`).attr('title', (result[0].label || ''))
					}

				} else {
					if(valueText == '')
						$(`#${locals.id}-autocomplete-text`).val('')
					$(`input[name="${locals.name}"]`).val('')
					$(`#${locals.id}-obj`).val('')
					$(`#${locals.id}-original-text`).html('')
					$(`#${locals.id}-original-text`).attr('title', '')
				}

			} else {
				$(`#${locals.id}-autocomplete-text`).val('')
				$(`#${locals.id}-autocomplete-text`).attr('placeholder', `Hata:${err.message}`)
			}
		})

	}
}



function cboEasyDateChange(value) {

	var date1 = new Date()
	var date2 = new Date()
	date1.setHours(0, 0, 0, 0)
	date1.setMinutes(-1 * (new Date()).getTimezoneOffset())
	date2.setHours(0, 0, 0, 0)
	date2.setMinutes(-1 * (new Date()).getTimezoneOffset())

	switch (value) {
		case 'today':
			break
		case 'thisWeek':
			date1 = date1.addDays(-1 * (date1.getDay() - 1))
			date2 = date2.addDays(7 - date2.getDay())
			break
		case 'thisMonth':
			date1 = date1.addDays(-1 * (date1.getDate() - 1))
			date2 = date2.lastThisMonth()
			break
		case 'lastMonth':
			date1 = new Date((new Date(date1.setMonth(date1.getMonth() - 1))).setDate(1))
			date2 = date1.lastThisMonth()
			break
		case 'last1Week':
			date1 = date1.addDays(-7)
			break

		case 'last1Month':
			date1 = new Date(date1.setMonth(date1.getMonth() - 1))
			break
		case 'last3Months':
			date1 = new Date(date1.setMonth(date1.getMonth() - 3))
			break
		case 'last6Months':
			date1 = new Date(date1.setMonth(date1.getMonth() - 6))
			break
		case 'thisYear':
			date1 = new Date(date1.getFullYear(), 0, 1)
			date2 = new Date(date2.getFullYear(), 11, 31)
			break
		case 'last1Year':
			date1 = new Date(date1.setMonth(date1.getMonth() - 12))
			break
		default:
			break
	}
	return {
		date1: date1.yyyymmdd(),
		date2: date2.yyyymmdd()
	}
}




function replaceUrlCurlyBracket(url, item) {

	return htmlEval(url, item)

	if((url || '') == '')
		return ''
	if(!(url.indexOf('{') > -1 && url.indexOf('}') > -1))
		return url
	var fieldList = []
	var dizi = url.split('}')
	dizi.forEach((e) => {
		if(e.indexOf('{') > -1) {
			fieldList.push(e.split('{')[1])
		}
	})


	fieldList.forEach((e) => {
		var e2 = e.replace('.toLowerCase()', '').replace('.toUpperCase()', '')
		var value = getPropertyByKeyPath(item, e2)

		if(value) {
			if(e.indexOf('.toLowerCase()') > -1) {
				value = value.toLowerCase()
			}
			if(e.indexOf('.toUpperCase()') > -1) {
				value = value.toUpperCase()
			}
		}

		url = url.replaceAll(`{${e}}`, value)
	})

	return url
}


function getPropertyByKeyPath(targetObj, keyPath, defaultValue) {
	if(targetObj == undefined || targetObj == null || !keyPath)
		return defaultPropertyValue(targetObj, defaultValue)

	if(keyPath.substr(0, 1) == '/')
		keyPath = keyPath.substr(1)
	if(keyPath.substr(0, 2) == './')
		keyPath = keyPath.substr(2)
	keyPath = keyPath.replaceAll('/', '.')

	var keys = keyPath.split('.')
	if(keys.length == 0)
		return defaultPropertyValue(undefined, defaultValue)
	keys = keys.reverse()
	var subObject = targetObj
	while(keys.length) {
		var k = keys.pop()
		if(typeof subObject[k] == 'undefined' || subObject[k] == null) {
			return defaultPropertyValue(undefined, defaultValue)
		} else {
			subObject = subObject[k]
		}
	}




	return defaultPropertyValue(subObject, defaultValue)
}

function defaultPropertyValue(subObject, defaultValue) {
	if(!subObject && defaultValue != undefined) {
		if(typeof defaultValue == 'string') {
			let s1 = defaultValue.indexOf('${')
			let s2 = defaultValue.indexOf('}', s1)
			if(s1 > -1 && s2 > -1) {
				let s = eval('`' + defaultValue + '`')
				subObject = s
			} else {
				subObject = defaultValue
			}
		} else {
			subObject = defaultValue
		}
	}
	return subObject
}

function getFormData(divId) {
	var obj = listObjectToObject($(`${divId}`).serializeArray().reduce((obj, item) => ({ ...obj, ...{[item.name.replaceAll('[', '.').replaceAll(']', '')]: item.value}}), {}))
	$(`${divId} input[type=checkbox]`).each(function() {
		if(this.name) {
			var key = this.name
			key = key.replaceAll('[', '').replaceAll(']', '.')
			if(key.substr(-1) == '.') {
				key = key.substr(0, key.length - 1)
			}
			obj[key] = this.checked
		}
	})
	return obj
}

function getFormData1111(divId) {
	var obj = listObjectToObject($(`${divId}`).serializeArray().reduce((obj, item) => ({ ...obj, ...{[item.name.replaceAll('[', '.').replaceAll(']', '')]: item.value}}), {}))
	$(`${divId} input[type=checkbox]`).each(function() {
		if(this.name) {
			var key = this.name
			key = key.replaceAll('[', '').replaceAll(']', '.')
			if(key.substr(-1) == '.') {
				key = key.substr(0, key.length - 1)
			}
			obj[key] = this.checked
		}
	})
	return obj
}

function getRemoteData(item, cb) {

	let data = item.value || ''

	if(item.value == undefined) {
		switch (item.type) {
			case 'grid':
				data = []
				let ps = pageSettings.getItem(`pageSize`)
				if(ps) {
					hashObj.query.pageSize = ps
					setHashObject(hashObj)
				}
				break
			case 'form':
				data = {}
				break
			case 'filter':
				data = {}
				break

			case 'number':
			case 'money':
				data = 0
				break
			case 'boolean':
				data = false
				break
			default:
				data = ''
				break
		}
	}

	if(item.dataSource == undefined) {
		return cb(null, data)
	}

	let url = ''
	if(hashObj.func == 'print') {
		url = item.dataSource.printUrl || item.dataSource.url || ''
	} else {
		url = item.dataSource.url || ''
	}

	let bHashParamsEkle = false
	if(hashObj.func == 'addnew') {
		return cb(null, item)
	} else {
		if(hashObj.id) {
			url = `${url.split('?')[0]}/${hashObj.id}`
			if(url.split('?')[1]) {
				url += '?' + url.split('?')[1]
			}
		}
	}
	let filterString = ''
	Object.keys(hashObj.query).forEach((key) => {
		if(key != 'mid') {
			if(filterString != '')
				filterString += '&'
			filterString += `${key}=${encodeURIComponent2(hashObj.query[key])}`
		}
	})
	if(filterString != '') {
		url += `${url.indexOf('?')>-1?'&':'?'}${filterString}`
	}

	if((url || '') == '')
		return cb(null, data)

	$.ajax({
		url: url,
		type: item.dataSource.method || 'GET',
		dataType: 'json',
		success: function(result) {
			if(result.success == undefined) {
				if(Array.isArray(result)) {
					data = result
				} else {
					data = result
				}
				cb(null, data)
			} else if(result.success) {
				data = result.data
				cb(null, data)
			} else {
				cb(result.error)
			}
		},
		error: function(err) {
			console.error(`getRemoteData error err:`, err)
			cb(err)
		}
	})

}


function cariKart_changed(prefix) {
	if(prefix.indexOf('.party.') < 0)
		prefix += '.party.'
	var fieldList = [
		"person.firstName.value",
		"person.familyName.value",
		"partyIdentification.0.ID.value",
		"partyIdentification.0.ID.attr.schemeID",
		"partyTaxScheme.taxScheme.name.value",
		"postalAddress.streetName.value",
		"postalAddress.buildingNumber.value",
		"postalAddress.buildingName.value",
		"postalAddress.blockName.value",
		"postalAddress.room.value",
		"postalAddress.citySubdivisionName.value",
		"postalAddress.district.value",
		"postalAddress.cityName.value",
		"postalAddress.region.value",
		"postalAddress.country.identificationCode.value",
		"postalAddress.country.name.value",
		"postalAddress.postalZone.value",
		"contact.telephone.value",
		"contact.telefax.value",
		"contact.electronicMail.value",
		"websiteURI.value"
	]

	var cari = $(`#${generateFormId(prefix+'_id')}-obj`).val()
	if(cari == undefined)
		return
	var obj = JSON.parse(decodeURIComponent(cari))


	fieldList.forEach((e) => {
		var componentFieldName = `${prefix}${e}`

		var value = getPropertyByKeyPath(obj, e)
		if(value != undefined) {
			if($(`#${generateFormId(componentFieldName)}`).val() != undefined) {
				$(`#${generateFormId(componentFieldName)}`).val(value)
			}
		}
	})

	if(($(`#${generateFormId(prefix + 'postalAddress.country.identificationCode.value')}`).val() || '') == '') {
		$(`#${generateFormId(prefix + 'postalAddress.country.identificationCode.value')}`).val('TR')

	}
}

function countryCode_changed(prefix) {
	var fieldName = `${prefix}postalAddress.country.identificationCode.value`
	var fieldNameCountryName = `${prefix}postalAddress.country.name.value`
	var countryCode = $(`#${generateFormId(fieldName)}`).val() || ''
	var countryText = $(`#${generateFormId(fieldName)} option:selected`).text() || ''

	if(countryCode != '') {
		$(`#${generateFormId(fieldNameCountryName)}`).val(countryText)

	}
}


function formSave(dataSource, formData) {
	var url = dataSource.url
	var method = 'GET'
	if(hashObj.func == 'addnew') {
		method = 'POST'
	} else if(hashObj.func == 'edit' && hashObj.id) {
		method = 'PUT'
		url = `${url.split('?')[0]}/${hashObj.id}`
		if(url.split('?')[1]) {
			url += '?' + url.split[1]
		}
	} else {
		method = 'PUT'
	}

	if(method == 'POST') {
		pageSettings.setItem('lastRecord', formData)
	}

	$.ajax({
		url: url,
		type: method,
		data: formData,
		dataType: 'json',
		success: function(result) {
			if(result.success) {
				if(hashObj.func == 'index') {
					alertX('Kayıt başarılı :-)')
				} else {
					var h = Object.assign({}, hashObj, { func: 'index', query: { page: 1 } })
					setHashObject(h)
				}

			} else {
				showError(result.error)
			}
		},
		error: function(err) {
			showError(err)
		}
	})
}

function collectFieldList(item) {
	var fieldList = {}
	if(item.tabs) {
		item.tabs.forEach((tab) => {
			if(tab.fields) {
				var f = collectFieldList(tab.fields)
				fieldList = Object.assign({}, fieldList, f)
			}
		})

	} else if(item.fields) {

		Object.keys(item.fields).forEach((key) => {
			if(item.fields[key].fields) {
				var f = collectFieldList(item.fields[key])

				if(item.fields[key].type == 'grid') {

					Object.keys(f).forEach((k) => {
						f[k].id = f[k].id || generateFormId(key + '.' + k)
						f[k].name = f[k].name || generateFormName(key + '.' + k)
					})
					var f2 = {}
					f2[key] = f
					fieldList = Object.assign({}, fieldList, f2)
				} else {
					Object.keys(f).forEach((k) => {
						f[k].id = f[k].id || generateFormId(k)
						f[k].name = f[k].name || generateFormName(k)
					})
					fieldList = Object.assign({}, fieldList, f)
				}

			} else {
				fieldList[key] = item.fields[key]
				fieldList[key].id = fieldList[key].id || generateFormId(key)
				fieldList[key].name = fieldList[key].name || generateFormName(key)
			}
		})
	}
	return fieldList
}


function refreshRemoteList(remoteList) {

	Object.keys(remoteList).forEach((e) => {
		var idList = []
		Object.keys(remoteList[e].list).forEach((key) => {
			idList.push(key)
		})

		var url = `${remoteList[e].dataSource.url.split('?')[0]}/${idList.join(',')}`
		getAjax(url, remoteList[e].dataSource.label || '{name}', '', (err, dizi) => {
			if(!err) {

				Object.keys(remoteList[e].list).forEach((key) => {
					dizi.forEach((d) => {
						if(d.obj._id == key) {
							$(remoteList[e].list[key].cellId).html(replaceUrlCurlyBracket((remoteList[e].dataSource.label || '{name}'), d.obj))
							if(remoteList[e].list[key].lookupTextField) {

								$(`input[name="${remoteList[e].list[key].lookupTextField}"]`).val(d.value)
							}
						}
					})
				})

			} else {
				console.error('getAjax err:', err)
			}
		})
	})
}

var keyupTimer = 0

function runTimer(selector, prefix = '') {
	if(keyupTimer == 0)
		return

	if(keyupTimer >= 2) {
		keyupTimer = 0
		runFilter(selector, prefix)
	} else {
		keyupTimer++
		setTimeout(() => {
			runTimer(selector, prefix)
		}, 1000)
	}
}

function runFilter(selector, prefix = '') {
	let h = getHashObject()
	let obj = getDivData(selector, prefix)
	if(obj) {
		obj = objectToListObject(obj)
	}

	Object.keys(obj).forEach((key) => {
		if(h.query[key] != undefined && obj[key] == '') {
			h.query[key] = undefined
			delete h.query[key]
		} else {
			if(obj[key] != '') {
				h.query[key] = obj[key]
			}
		}
	})
	if(h.query.page) {
		h.query.page = 1
	}

	let bFarkli = false
	if(Object.keys(h.query).length != Object.keys(hashObj.query).length) {
		bFarkli = true
	} else {
		Object.keys(h.query).forEach((key) => {
			if(h.query[key] != hashObj.query[key]) {
				bFarkli = true
				return
			}
		})
	}


	if(!bFarkli) {
		window.onhashchange()
	} else {
		setHashObject(h)
	}
}




function menuLink(path, filter) {
	var s = `#${path}`

	if(!filter) {
		filter = {}
	}
	if(filter) {
		var filterString = ''
		Object.keys(filter).forEach((key) => {
			if(filterString != '')
				filterString += '&'
			filterString += `${key}=${encodeURIComponent2(filter[key])}`
		})
		s += '?' + filterString
	}
	return s
}

function openPage(url, title) {
	history.pushState('', 'New Page Title', '${s}')
}

var q = getAllUrlParams()

function getAllUrlParams(query = null) {
	var q = {}
	var queryString = query || window.location.search
	if(queryString.substr(0, 1) != '?') {
		queryString = '?' + queryString
	}
	var dizi = queryString.split('&')
	dizi.forEach((d) => {
		var key = d.split('=')[0]
		if(key[0] == '?')
			key = key.substr(1)

		var value = getUrlParameter(key, queryString)

		if(value != '') {

			q[key] = value
		}
	})
	return q
}

function getUrlParameter(name, query = null) {
	name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]')
	var regex = new RegExp('[\\?&]' + name + '=([^&#]*)')
	var results = regex.exec(query || location.search)

	return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '))
}

function generateLeftMenu(leftMenu) {
	var mid = hashObj.query.mid || '0'

	var s = ``
	leftMenu.forEach((item, index) => {
		s += generateMenu(item, mid)
	})
	return s
}

function generateMenu(menu, mid, parent) {
	var s = ``
	var bActive = false
	if(menu.visible === false)
		return ''

	if(typeof menu.nodes != 'undefined') {
		if(menu.nodes.length > 0) {
			bActive = false
			menu.nodes.forEach((e) => {
				if(e.mId == mid) {
					bActive = true
					return
				}
				if(typeof e.nodes != 'undefined') {
					e.nodes.forEach((e2) => {
						if(e2.mId == mid) {
							bActive = true
							return
						}
					})
				}
			})
			s = `\n`
			if(bActive) {
				s += `<a class="nav-link ${(parent || '')!=''?'ms-4':''} " href="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapse${menu.mId.replaceAll('.','-')}" aria-expanded="false" aria-controls="pagesCollapse${menu.mId.replaceAll('.','-')}">\n`
			} else {
				s += `<a class="nav-link ${(parent || '')!=''?'ms-4':''} collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapse${menu.mId.replaceAll('.','-')}" aria-expanded="false" aria-controls="pagesCollapse${menu.mId.replaceAll('.','-')}">\n`
			}

			s += `<i class="${menu.icon || 'fas fa-table'}"></i>${menu.text} <i class="fas fa-angle-down float-end"></i>
			</a>`

			if(bActive) {
				s += `<div class="collapse show" `
			} else {
				s += `<div class="collapse" `
			}
			if(parent) {
				s += `id="pagesCollapse${menu.mId.replaceAll('.','-')}" data-bs-parent="#pagesCollapse${parent.mId.replaceAll('.','-')}">`
				s += `<nav class="nav ms-4 accordion" id="navId${menu.mId.replaceAll('.','-')}">
				`
			} else {
				s += `id="pagesCollapse${menu.mId.replaceAll('.','-')}" data-bs-parent="#sidenavAccordion">`
				s += `<nav class="nav accordion" id="navId${menu.mId.replaceAll('.','-')}">
				`
			}


			menu.nodes.forEach((e) => {
				s += generateMenu(e, mid, menu)
			})
			s += `
			</nav>
			</div>`
		}
		return s
	} else {
		if(menu.mId == mid) {
			bActive = true
		}
		s = `\n`

		var link = menuLink(menu.path, { mid: menu.mId })
		if(menu.path == '/settings/form-options') {
			global.formOptionsLink = link

		}
		s += `<a id="menu${menu.mId.replaceAll('.','-')}" class="nav-link ${(parent || '')!=''?'ms-4':''} navigation ${bActive?'active':''}" href="${link}">`

		s += `<i class="${menu.icon || 'fas fa-table'}"></i>${menu.text}
		</a>
		`
		return s

	}
}

function getBreadCrumbs(leftMenu, mid) {
	var menuItem = []

	leftMenu.forEach((m1) => {
		if(menuItem.length > 0)
			return
		if(m1.mId == mid) {
			menuItem.push({ text: m1.text, icon: m1.icon, mId: m1.mId, module: m1.module || '' })
			return
		}

		if(m1.nodes) {
			m1.nodes.forEach((m2) => {

				if(m2.mId == mid) {
					menuItem.push({ text: m1.text, icon: m1.icon, mId: m1.mId, module: m1.module || '' })
					menuItem.push({ text: m2.text, icon: m2.icon, mId: m2.mId, module: m2.module || '' })
					return
				}
				if(m2.nodes) {
					m2.nodes.forEach((m3) => {
						if(m3.mId == mid) {
							menuItem.push({ text: m1.text, icon: m1.icon, mId: m1.mId, module: m1.module || '' })
							menuItem.push({ text: m2.text, icon: m2.icon, mId: m2.mId, module: m2.module || '' })
							menuItem.push({ text: m3.text, icon: m3.icon, mId: m3.mId, module: m3.module || '' })
							return
						}
						if(m3.nodes) {
							m3.nodes.forEach((m4) => {
								if(m4.mId == mid) {
									menuItem.push({ text: m1.text, icon: m1.icon, mId: m1.mId, module: m1.module || '' })
									menuItem.push({ text: m2.text, icon: m2.icon, mId: m2.mId, module: m2.module || '' })
									menuItem.push({ text: m3.text, icon: m3.icon, mId: m3.mId, module: m3.module || '' })
									menuItem.push({ text: m4.text, icon: m4.icon, mId: m4.mId, module: m4.module || '' })
									return
								}
							})
						}
					})
				}
			})
		}
	})

	return menuItem
}

function getBreadCrumbsFromPath(leftMenu, path) {
	var menuItem = []

	leftMenu.forEach((m1) => {
		if(menuItem.length > 0)
			return
		if(m1.path == path) {
			menuItem.push({ text: m1.text, icon: m1.icon, mId: m1.mId, module: m1.module || '' })
			return
		}

		if(m1.nodes) {
			m1.nodes.forEach((m2) => {

				if(m2.path == path) {
					menuItem.push({ text: m1.text, icon: m1.icon, mId: m1.mId, module: m1.module || '' })
					menuItem.push({ text: m2.text, icon: m2.icon, mId: m2.mId, module: m2.module || '' })
					return
				}
				if(m2.nodes) {
					m2.nodes.forEach((m3) => {
						if(m3.path == path) {
							menuItem.push({ text: m1.text, icon: m1.icon, mId: m1.mId, module: m1.module || '' })
							menuItem.push({ text: m2.text, icon: m2.icon, mId: m2.mId, module: m2.module || '' })
							menuItem.push({ text: m3.text, icon: m3.icon, mId: m3.mId, module: m3.module || '' })
							return
						}
						if(m3.nodes) {
							m3.nodes.forEach((m4) => {
								if(m4.path == path) {
									menuItem.push({ text: m1.text, icon: m1.icon, mId: m1.mId, module: m1.module || '' })
									menuItem.push({ text: m2.text, icon: m2.icon, mId: m2.mId, module: m2.module || '' })
									menuItem.push({ text: m3.text, icon: m3.icon, mId: m3.mId, module: m3.module || '' })
									menuItem.push({ text: m4.text, icon: m4.icon, mId: m4.mId, module: m4.module || '' })
									return
								}
							})
						}
					})
				}
			})
		}
	})

	return menuItem
}


function changedb(dbId) {
	window.location.href = `/changedb?db=${dbId}&r=${window.location.href}`
}

function windowPathToFieldName(path = '') {
	if(path == '')
		path = hashObj.path
	if(path.substr(0, 1) == '/')
		path = path.substr(1)
	path = path.replaceAll('/', '_')
	path = path.replaceAll('-', '_')

	return path
}


function programButtons1111(panelButtons = '') {
	var prgButtons = []
	if(hashObj.settings) {
		prgButtons = hashObj.settings.programButtons || []
	}


	if(prgButtons.length == 0 && panelButtons == '')
		return ''

	var sbuf = `<div class="button-bar mt-0 p-1 rounded justify-content-start" role="toolbar" aria-label="Toolbar with button groups">\n`
	if(panelButtons != '')
		sbuf += panelButtons

	if(prgButtons.length > 0) {
		prgButtons.forEach((e) => {
			if(e.passive == false) {
				var icon = ''
				var text = e.text || ''
				if((e.icon || '') != '') {
					icon = e.icon
				} else {
					switch (e.program.type) {
						case 'file-importer':
							icon = 'fas fa-file-import'
							break
						case 'file-exporter':
							icon = 'fas fa-file-export'
							break
						case 'connector-importer':
							icon = 'fas fa-cloud-upload-alt'
							break

						case 'connector-exporter':
							icon = 'fas fa-cloud-download-alt'
							break

						case 'email':
							icon = 'fas fa-envelope-square'
							break

						case 'sms':
							icon = 'fas fa-sms'
							break
					}
				}
				sbuf += `<a class="${e.class || 'btn btn-primary'} me-2" href="javascript:runProgram('${e.program._id}','${e.program.type}')" title="${text}">${icon!=''?'<i class="' + icon + '"></i>':''} ${text}</a>\n`
			}
		})
	}
	sbuf += `
	<input type="file" name="fileUpload" id="fileUpload" style="visibility:hidden;" accept="*.*" multiple>
	</div>
	`
	return sbuf
}

function programFileUploaderChangeEvent() {
	$("#fileUpload").change(function() {
		var reader = new FileReader()
		var fileIndex = 0
		var files = this.files
		var uploadFiles = []
		reader.addEventListener("load", function() {

			if(reader.result) {
				uploadFiles[uploadFiles.length - 1].data = reader.result.split('base64,')[1]
			}
			fileIndex++
			runReader()
		})

		function runReader() {
			if(fileIndex >= files.length) {
				document.dispatchEvent(new CustomEvent("file-upload-finished", { detail: uploadFiles }))
				return
			}
			var file = files[fileIndex]
			uploadFiles.push({ name: file.name, modifiedDate: file.lastModifiedDate, size: file.size, data: '' })

			reader.readAsDataURL(file)
		}

		runReader()
	})
}

var programId = ''
var programType = ''

document.addEventListener('file-upload-finished', function(event) {
	var data = { files: event.detail }
	runProgramAjax(data)
})

function runProgram(_id, type) {
	programId = _id
	programType = type
	if(type == 'file-importer') {
		$('#fileUpload').trigger('click')
		return
	}
	var list = []

	$(".checkSingle").each(function() {
		if(this.checked) {
			list.push({ _id: this.value })
		}
	})
	if(list.length == 0)
		return alertX('Hiç kayıt seçilmemiş')
	var data = { list: list }
	runProgramAjax(data)
}

function runProgramAjax(data) {
	$.ajax({
		url: `/dbapi/programs/run/${programId}`,
		data: data,
		type: 'POST',
		dataType: "json",
		success: function(result) {
			if(result.success) {
				if(typeof result.data == 'string') {
					if(programType == 'file-exporter') {
						download(`data:application/file;base64,${btoa2(result.data)}`, `export_${(new Date()).yyyymmddhhmmss()}.csv`, 'application/file')
						return
					} else if(programType == 'connector-exporter') {
						alertX(result.data, 'Bilgi', () => {
							window.onhashchange()
						})
					} else {
						alertX(result.data, 'Bilgi', () => {
							window.onhashchange()
						})
					}
				}


			} else {
				showError(result.error)
			}
		},
		error: function(err) {
			showError(err)
		}
	})
}

function runPanelButtons(url, method) {

	var list = []

	$(".checkSingle").each(function() {
		if(this.checked) {
			list.push({ _id: this.value })
		}
	})
	if(list.length == 0)
		return alertX('Hiç kayıt seçilmemiş')
	var data = { list: list }
	$.ajax({
		url: url,
		data: data,
		type: 'POST',
		dataType: "json",
		success: function(result) {
			if(result.success) {
				alertX(result.data, () => {
					window.onhashchange()

				})

			} else {
				showError(result.error)
			}
		},
		error: function(err) {
			showError(err)
		}
	})
}



function frameYazdir(frameId) {
	var mainCtrl = document.getElementById(frameId)
	var iframe = mainCtrl.contentWindow || (mainCtrl.contentDocument.document || mainCtrl.contentDocument)

	iframe.focus()
	iframe.print()
}

function pencereyiKapat() {
	window.open('', '_parent', '');
	window.close()
}


function getPageSettings(module) {
	if(!global.settings)
		return []
	var obj = global.settings.find((e) => {
		if(e.module == module) {
			return true
		} else {
			return false
		}
	})

	return obj || {}
}

moment.updateLocale('en', {
	relativeTime: {
		future: "in %s",
		past: "%s önce",
		s: 'birkaç saniye',
		ss: '%d saniye',
		m: "bir dakika",
		mm: "%d dakika",
		h: "bir saat",
		hh: "%d saat",
		d: "bir gün",
		dd: "%d gün",
		w: "bir hafta",
		ww: "%d hafta",
		M: "bir ay",
		MM: "%d ay",
		y: "bir yıl",
		yy: "%d yıl"
	}
})


function initIspiyonService() {
	if(!global.ispiyonServiceUrl)
		return
	var socket = io(global.ispiyonServiceUrl, {
		reconnectionDelayMax: 10000
	})
	socket.on('connect', () => {
		socket.emit('I_AM_HERE', global.token, global.dbId)

	})

	socket.on('TOTAL_UNREAD', (count, lastNotifications) => {

		if(Number(count) > 0) {
			$('#unread-notification-count').html(count)
			global.lastNotifications = lastNotifications
		} else {
			$('#unread-notification-count').html('')
			global.lastNotifications = []
		}
	})

	socket.on('NOTIFY', (text, status, icon) => {
		var message = SnackBar({
			message: (text || '').substr(0, 500),
			status: status || 'orange',
			dismissible: true,
			timeout: 3000
		})
	})
	socket.on('message', data => {
		console.log('serverdan gelen mesaj:', data)
	})

	$(document).ready(() => {

		$('#alertsDropdown').on('shown.bs.dropdown', () => {

			var s = ``
			if(global.lastNotifications) {
				global.lastNotifications.forEach((e, index) => {
					s += notificationItem(e._id, e.createdDate, e.text, e.status, e.icon)
				})
			}
			$('#last-notifications').html(s)
			$('#unread-notification-count').html('')
			global.lastNotifications = []
			socket.emit('READ_ALL') //, global.token,global.dbId)

		})

		$('#alertsDropdown').on('hidden.bs.dropdown', () => {

		})

	})
}

function notificationItem(id, notifyDate, text, status, icon) {
	var bgClass = 'bg-primary'
	switch (status || '') {
		case 'success':
			bgClass = 'bg-primary'
			icon = icon || 'fas fa-bell'
			break
		case 'error':
			bgClass = 'bg-danger'
			icon = icon || 'fas fa-times'
			break
		case 'warning':
			bgClass = 'bg-warning'
			icon = icon || 'fas fa-exclamation-triangle'
			break
	}
	var s = `
	<a id='${id}' class="notification-dropdown-item dropdown-item d-flex align-items-center" href="#">
	<div class="me-3">
	<div class="icon-circle ${bgClass}">
	<i class="${icon?icon:'fas fa-bell'} text-white"></i>
	</div>
	</div>
	<div  class="text-truncate" style="max-width:300px" >
	<div class="small text-gray-500">${moment(notifyDate).fromNow()}</div>
	<span>${text}</span>
	</div>
	</a>
	`
	return s
}

function notifyMe(text, status) {
	var message = SnackBar({
		message: text,
		status: status || 'orange',
		dismissible: true,
		timeout: 3000
	})

}

function formCalculation(divId, calcUrl) {
	if(!calcUrl) return
	$(`${divId} .formatted-number`).each(function() {
		let sbuf = $(this).val()
		$(this).attr('type', 'number')
		$(this).val(convertNumber(sbuf))
	})
	let formData = getFormData(`${divId}`)
	$.ajax({
		url: calcUrl,
		type: 'POST',
		data: formData,
		dataType: 'json',
		success: function(result) {
			if(result.success) {
				setFormData(divId, result.data)
			} else {
				showError(result.error)
			}
		},
		error: function(err) {
			showError(err)
		}
	})
}

function setFormData(divId, data) {
	let elemanlar = document.querySelectorAll(`${divId} input, select`)
	let i = 0
	while(i < elemanlar.length) {
		let el = elemanlar[i]
		if(el.name) {
			if(el.name.indexOf('[-1]') < 0) {
				let fieldName = generateFieldName(el.name)

				if(el.type == 'checkbox') {
					let value = getPropertyByKeyPath(data, fieldName, el.checked)
					if(value != undefined) {
						el.checked = value
					}
				} else {
					let value = getPropertyByKeyPath(data, fieldName, el.value)
					if(value != undefined) {
						el.value = value
					}
				}
			}
		}
		i++
	}

	let j = 0
	let gridler = document.querySelectorAll(`${divId} div[data-type="grid"]`)
	while(j < gridler.length) {
		let table = gridler[j]
		if(table.item && table.id) {
			if(table.item.parentField) {
				table.item.value = getPropertyByKeyPath(data, table.item.parentField) || []
				gridBody(`${divId} #${table.id}`, table.item, false, () => {})
			}
		}

		j++
	}

}

function generateFieldName(name) {
	let s = name.replaceAll('][', '.').replaceAll('[', '.').replaceAll(']', '')

	return s
}

function getUrlInfo(href = window.location.href) {
	var match = href.match(/^(https?\:)\/\/(([^:\/?#]*)(?:\:([0-9]+))?)([\/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/);
	return match && {
		href: href,
		protocol: match[1],
		host: match[2],
		hostname: match[3],
		port: match[4],
		pathname: match[5],
		search: match[6],
		hash: match[7]
	}
}




// function appendScript(divId, html) {
// 	if(script) {
// 		let innerScript = ''
// 		if(Array.isArray(script)) {
// 			script.forEach((e) => {
// 				innerScript += e + '\n'
// 			})
// 		} else {
// 			innerScript = script
// 		}

// 		let i = 0,
// 			bFound = false
// 		while(i < document.scripts.length) {
// 			if(document.scripts[i].innerHTML == innerScript) {
// 				bFound = true
// 				break
// 			}
// 			i++
// 		}
// 		if(!bFound) {
// 			document.querySelector(divId).insertAdjacentHTML('afterbegin', `<script type="text/javascript">${innerScript}</script>`)
// 		}
// 	}
// }


},{}],6:[function(require,module,exports){
(function (global){(function (){
addModalsToDocument()

function openUrl(url, _id, target, popup) {
	url = url.replaceAll('{_id}', _id)
	if(target == '_blank' && popup != true) {
		window.open(url, target)
	} else if(popup) {
		popupCenter(url, 'Goster', '900', '600')
	} else {
		localStorage.setItem('returnUrl', window.location.href)
		window.location.href = url
	}

}

function openInNewTab(url) {
	var win = window.open(url, '_blank')
	win.focus()
	return win
}

function popupCenter(url, title, w, h, isDialog = false) {
	var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : window.screenX
	var dualScreenTop = window.screenTop != undefined ? window.screenTop : window.screenY

	var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width
	var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height

	var systemZoom = width / window.screen.availWidth
	var left = (width - w) / 2 / systemZoom + dualScreenLeft
	var top = (height - h) / 2 / systemZoom + dualScreenTop
	if(!isDialog) {
		var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w / systemZoom + ', height=' + h / systemZoom + ', top=' + top + ', left=' + left)
		if(window.focus)
			newWindow.focus()
	} else {
		var newWindow = openDialog(url, title, 'scrollbars=yes, width=' + w / systemZoom + ', height=' + h / systemZoom + ', top=' + top + ', left=' + left)
		if(window.focus)
			newWindow.focus()
	}

}

var copyX_cb = null
var copyX_fields = {}

function copyX(fields, title, cb = null) {
	copyX_fields = fields
	copyX_cb = cb

	$('#modalCopyLabel').html(title)
	var s = ``
	Object.keys(fields).forEach((key) => {
		var field = fields[key]
		s += `<div class="form-group">
		<label class="m-0 p-0">${field.title || ''}</label>
		<input type="text" class="form-control ${field.class || ''}" id="modalCopyField-${generateFormId(key)}" placeholder="${ field.placeholder || field.title || ''}" ${field.readonly==true?'readonly':''} autocomplete="off" autofill="off" spellcheck="false" value="${field.value}">
		</div>`
	})
	$('#modalCopy .modal-body').html(s)

	$('#modalCopy').modal('show')

}

function modalCopyOk() {
	$('#modalCopy').modal('hide')
	if(copyX_cb) {
		var formData = {}
		Object.keys(copyX_fields).forEach((key) => {
			var field = copyX_fields[key]
			formData[key] = $(`#modalCopyField-${generateFormId(key)}`).val()
		})
		formData = listObjectToObject(clone(formData))

		copyX_cb(true, formData)

	} else {
		$('#modalCopy').modal('hide')
	}
}


function logout() {
	confirmX('Programdan çıkmak istiyor musunuz?', (resp) => {
		if(resp) {
			localStorage.removeItem('global')
			window.location.href = `/logout`
		}
	})
}


var confirmX_response = false

function confirmX(message, type = 'info', cb) {
	confirmX_response = false
	if(typeof type == 'function') {
		cb = type
		type = 'info'
	}


	$('#modalConfirm .modal-content').removeClass('alert-warning')
	$('#modalConfirm .modal-content').removeClass('alert-info')
	$('#modalConfirm .modal-content').removeClass('alert-danger')

	$('#modalConfirm .modal-content').addClass(`alert-${type}`)

	$('#modalConfirm .modal-content .message').html(message.replaceAll('\n', '<br>'))

	$('#modalConfirm').modal('show')

	$('#modalConfirm').on('hidden.bs.modal', function(e) {
		$('#modalConfirm').unbind('hidden.bs.modal')
		if(cb) {
			cb(confirmX_response)
		}
	})

	$('#modalConfirmOk').on('click', function(e) {
		$('#modalConfirmOk').unbind('click')
		confirmX_response = true
		$('#modalConfirm').modal('hide')
	})
}



function alertX(message, title = '', type = 'info', cb) {
	let icon = 'fas fa-exclamation-triangle'

	if(typeof title == 'function') {
		cb = title
		title = ''
		type = 'info'
	} else if(typeof type == 'function') {
		cb = type
		type = 'info'
	}
	$('#modalMessageHeader').removeClass('alert-warning')
	$('#modalMessageHeader').removeClass('alert-info')
	$('#modalMessageHeader').removeClass('alert-danger')

	switch (type) {
		case 'danger':
			icon = 'fas fa-skull-crossbones'
			$('#modalMessageHeader').addClass('alert-danger')
			break
		case 'warning':
			icon = 'fas fa-exclamation-triangle'
			$('#modalMessageHeader').addClass('alert-warning')
			break
		default:
			icon = 'fas fa-info-circle'
			$('#modalMessageHeader').addClass('alert-info')
			break
	}
	title = `<i class="${icon}"></i> ${title}`
	$('#modalMessageLabel').html(title)

	$('#modalMessage .modal-body').html(`${message.replaceAll('\n','<br>')}`)

	$('#modalMessage').modal('show')
	$('#modalMessage').on('hidden.bs.modal', function(e) {
		if(cb)
			cb('ok')
	})
}

function showError(err) {
	alertX(`${err.code || err.name}<br>${err.message || err.name}`, 'Hata', 'danger')
}


function modalFormOptions() {
	var s = global.formOptionsLink
	if(s.indexOf('?') > -1) {
		s += '&'
	} else {
		s += '?'
	}
	s += `&module=${hashObj.module}`
	window.location.href = s
}

function modalFormOptions_OK() {
	var data = { page: {} }
	data.page[windowPathToFieldName()] = { programs: [null] }
	$(".programRow").each(function() {
		if(this.checked) {
			var prg = JSON.parse(decodeURIComponent(this.value))

			data.page[windowPathToFieldName()].programs.push({ _id: prg._id, type: prg.type, name: prg.name })
		}
	})


	$.ajax({
		url: `/dbapi/settings`,
		data: data,
		type: 'PUT',
		dataType: 'json',
		success: function(result) {
			if(result.success) {
				window.location.href = `/general/login/passport?r=${window.location.href}`
			} else {
				showError(result.error)
			}
		},
		error: function(err) {
			showError(err)
		}
	})
}

function addModalsToDocument(parentId = 'body') {
	$(document).ready(() => {
		if(!document.querySelector(`${parentId} #modalFormOptions`)) {
			document.querySelector(parentId).insertAdjacentHTML('beforeend', `
		<div class="modal" id="modalFormOptions" tabindex="-1" role="dialog" data-backdrop="static" data-keyboard="true" aria-labelledby="modalFormOptionsLabel" aria-hidden="true">
			<div class="modal-dialog modal-dialog-scrollable modal-dialog-centered" role="document">
				<div class="modal-content">
					<div class="modal-header p-2 ">
						<label class="modal-title" id="modalFormOptionsLabel"><i class="fas fa-cogs"></i> Form Options</label>
						<button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="modal-body p-2" style="overflow: auto;">
						<table class="table form-table table-bordered table-striped m-0"  cellspacing="0">
							<thead>
								<tr class="text-nowrap">
									<th width="30" class="">#</th>
									<th class="">Program Adı</th>
									<th class="">Türü</th>
								</tr>
							</thead>
							<tbody id="gridPrograms">
							</tbody>
						</table>
					</div>
					<div class="modal-footer">
						<a class="btn btn-primary" href="javascript:modalFormOptions_OK()" title="Kaydet"><i class="fas fa-check"></i> Tamam</a>
						<button class="btn btn-secondary" type="button" data-bs-dismiss="modal">Vazgeç</button>
					</div>
				</div>
			</div>
		</div>
		`)
		}
		if(!document.querySelector(`${parentId} #modalMessage`)) {
			document.querySelector(parentId).insertAdjacentHTML('beforeend', `
		<div class="modal" id="modalMessage" tabindex="-1" role="dialog" data-backdrop="static" data-keyboard="true" aria-labelledby="modalMessageLabel" aria-hidden="true" style="z-index: 1051">
			<div class="modal-dialog modal-dialog-scrollable modal-dialog-centered" role="document">
				<div class="modal-content">
					<div id="modalMessageHeader" class="modal-header p-2 ">
						<label class="modal-title" id="modalMessageLabel"></label>
						<button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="modal-body p-2" style="overflow: auto;">
						
					</div>
					<div class="modal-footer">
						<button class="btn btn-primary" type="button" data-bs-dismiss="modal">Tamam</button>
					</div>
				</div>
			</div>
		</div>
	`)
		}
		if(!document.querySelector(`${parentId} #modalConfirm`)) {
			document.querySelector(parentId).insertAdjacentHTML('beforeend', `
		<div class="modal" id="modalConfirm" tabindex="-1" role="dialog" data-backdrop="static" data-keyboard="true" aria-labelledby="modalConfirmLabel" aria-hidden="true">
			<div class="modal-dialog modal-dialog-scrollable modal-dialog-centered" role="document">
				<div class="modal-content">
					<div class="modal-header modal-body row align-items-center p-3" style="overflow: auto;">
						<div class="col-md-2 icon" style="font-size:16pt;">
							<i class="fas fa-question-circle fa-2x"></i>
						</div>
						<div class="col message" style="font-size:12pt;">
						</div>
					</div>
					<div class="modal-footer">
						<button id="modalConfirmOk" class="btn btn-primary" type="button">Tamam</button>
						<button class="btn btn-secondary" type="button" data-bs-dismiss="modal">Vazgeç</button>
					</div>
				</div>
			</div>
		</div>
	`)
		}

		if(!document.querySelector(`${parentId} #modalCopy`)) {
			document.querySelector(parentId).insertAdjacentHTML('beforeend', `
		<div class="modal" id="modalCopy" tabindex="-1" role="dialog" data-backdrop="static" data-keyboard="true" aria-labelledby="modalCopyLabel" aria-hidden="true">
			<div class="modal-dialog modal-dialog-scrollable modal-dialog-centered" role="document">
				<div class="modal-content">
					<div id="modalCopyHeader" class="modal-header p-2 ">
						<label class="modal-title"><i class="fas fa-copy"></i> <span id="modalCopyLabel"></span></label>
						<button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="modal-body" style="overflow: auto;">
						
					</div>
					<div class="modal-footer">
						<a href="javascript:modalCopyOk()" id="modalCopyOk" class="btn btn-primary">Tamam</a>
						<button class="btn btn-secondary" type="button" data-bs-dismiss="modal">Vazgeç</button>
					</div>
				</div>
			</div>
		</div>
	`)
		}


		if(!document.querySelector(`${parentId} #modalRow`)) {
			document.querySelector(parentId).insertAdjacentHTML('beforeend', `
		<div class="modal" id="modalRow" tabindex="-1" role="dialog" data-backdrop="static" data-keyboard="true" aria-labelledby="modalRowLabel" aria-hidden="true">
			<div class="modal-dialog modal-lg modal-dialog-scrollable modal-dialog-centered" role="document">
				<div class="modal-content">
					<form>
					<div id="modalRowHeader" class="modal-header p-2 ">
						<label class="modal-title"></label>
						<button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					
					<div class="modal-body p-1" style="overflow: auto;">
						
					</div>

					<div class="modal-footer">
						<a href="javascript:modalRowOk()" id="modalRowOk" class="btn btn-primary">Tamam</a>
						<button class="btn btn-secondary" type="button" data-bs-dismiss="modal">Vazgeç</button>
					</div>
					</form>
				</div>
			</div>
		</div>
	`)
		}
	})
}
}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],7:[function(require,module,exports){
Date.prototype.yyyymmdd = function() {
	let yyyy = this.getFullYear().toString()
	let mm = (this.getMonth() + 1).toString()
	let dd = this.getDate().toString()
	let HH = this.getHours().toString()
	let min = this.getMinutes().toString()
	let sec = this.getSeconds().toString()
	return yyyy + '-' + (mm[1] ? mm : "0" + mm[0]) + '-' + (dd[1] ? dd : "0" + dd[0])
}

Date.prototype.hhmmss = function() {

	let HH = this.getHours().toString()
	let min = this.getMinutes().toString()
	let sec = this.getSeconds().toString()
	return (HH[1] ? HH : "0" + HH[0]) + ':' + (min[1] ? min : "0" + min[0]) + ':' + (sec[1] ? sec : "0" + sec[0])
}

Date.prototype.yyyymmddhhmmss = function() {
	let yyyy = this.getFullYear().toString()
	let mm = (this.getMonth() + 1).toString()
	let dd = this.getDate().toString()
	let HH = this.getHours().toString()
	let min = this.getMinutes().toString()
	let sec = this.getSeconds().toString()
	return yyyy + '-' + (mm[1] ? mm : "0" + mm[0]) + '-' + (dd[1] ? dd : "0" + dd[0]) + ' ' + (HH[1] ? HH : "0" + HH[0]) + ':' + (min[1] ? min : "0" + min[0]) + ':' + (sec[1] ? sec : "0" + sec[0])
}

Date.prototype.hhmm = function() {

	let HH = this.getHours().toString()
	let min = this.getMinutes().toString()
	let sec = this.getSeconds().toString()
	return (HH[1] ? HH : "0" + HH[0]) + ':' + (min[1] ? min : "0" + min[0])
}

Date.prototype.addDays = function(days) {
	let dat = new Date(this.valueOf())
	dat.setDate(dat.getDate() + days)
	return dat
}

Date.prototype.lastThisMonth = function() {
	let dat = new Date(this.valueOf())
	dat = new Date(dat.getFullYear(), dat.getMonth() + 1, 0)
	return dat
}

function clone(obj) {
	try{
	return JSON.parse(JSON.stringify(obj))
}catch(tryErr){
	console.error('obj:',obj)
	console.error(tryErr)
}
}


function b64EncodeUnicode(str) {
	return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function toSolidBytes(match, p1) { return String.fromCharCode('0x' + p1) }))
}

function b64DecodeUnicode(str) {
	return decodeURIComponent(atob(str).split('').map(function(c) {
		return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
	}).join(''))
}


function btoa2(str) {
	return btoa(encodeURIComponent2(str).replace(/%([0-9A-F]{2})/g, function toSolidBytes(match, p1) {
		return String.fromCharCode('0x' + p1)
	}))
}

function atob2(str) {
	return decodeURIComponent(atob(str).split('').map(function(c) {
		return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
	}).join(''))
}


function encodeURIComponent2(str) {
	return encodeURIComponent(str).replace(/[!'()*]/g, escape)
}

function htmlEncode(str) {
	let buf = []
	if(str) {
		for(let i = str.length - 1; i >= 0; i--) {
			buf.unshift(['&#', str[i].charCodeAt(), ';'].join(''))
		}
	} else {
		return ''
	}


	return buf.join('')
}

function htmlDecode(str) {
	return str.replace(/&#(\d+)/g, function(match, dec) {
		return String.fromCharCode(dec)
	})
}


function dateTimeFromText(dateStr) {
	d = new Date(dateStr)
	d.setMinutes(d.getMinutes() + (new Date()).getTimezoneOffset() * 1)

	return d;
}


Number.prototype.formatDecimal = function() {
	let c = 0;
	let d = whatDecimalPointer()
	let t = d == ',' ? '.' : ',';

	let s = _formatMoney(this, c, d, t)

	return s;
}

Number.prototype.formatMoney = function(c1) {
	let c = c1 || 2;
	let d = whatDecimalPointer()
	let t = d == ',' ? '.' : ','

	let s = _formatNumber(this, c, d, t)

	return s;
}



function _formatNumber(value, c, d, t) {
	var n = value
	c = isNaN(c) ? 2 : c
	d = d == undefined ? whatDecimalPointer() : d
	t = t == undefined ? (d == ',' ? '.' : ',') : t
	var s = n < 0 ? '-' : ''
	var i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + ''
	var j = (j = i.length) > 3 ? j % 3 : 0
	return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "")
}

Number.prototype.n2 = function() {
	let sbuf = this.toString()
	if(sbuf.length == 1) {
		sbuf = '0' + sbuf
	}

	return sbuf
}


Number.prototype.round = function(precision) {
	var t = this
	var rakam = 1
	if(precision <= 0)
		return Math.round(t)
	for(var i = 0; i < precision; i++) {
		rakam = rakam * 10
	}
	var sonuc = Math.round(rakam * t) / rakam

	return sonuc

}

Number.prototype.toDigit = function(digit) {
	var t = this
	var s = t.toString()
	if(s.length < digit) {
		s = '0'.repeat(digit - s.length) + s
	}
	return s
}

Number.prototype.formatQuantity = function(c) {
	c = isNaN(c) ? 1 : c
	let d = whatDecimalPointer()
	let t = d == ',' ? '.' : ','

	let s = _formatNumber(this, c, d, t)

	return s
}

function convertNumber(text) {
	// try {
	if(typeof text == 'number')
		return text
	text = text || ''
	let replace = '[^-\\d' + whatDecimalPointer() + ']'
	let reg = new RegExp(replace, "g")

	text = text.replace(reg, '')

	// if(!isNaN(text)) {
	// 	return Number(text)
	// } else {
	// 	return 0
	// }
	if(text == '')
		text = '0'
	return Number(text)
	// } catch (err) {
	// 	console.log(`typeof text:`, typeof text)
	// 	console.log(`text:`, text)
	// 	console.log(`error:`, err)
	// }

}



function whatDecimalPointer() {
	let n = 1.1;
	n = n.toLocaleString().substring(1, 2)
	return n;
}

function pagination(c, m) {
	let current = Number(c),
		last = Number(m),
		delta = 2,
		left = current - delta,
		right = current + delta + 1,
		range = [],
		rangeWithDots = [],
		l;

	for(let i = 1; i <= last; i++) {
		if(i == 1 || i == last || i >= left && i < right) {
			range.push(i)
		}
	}


	for(let i of range) {
		if(l) {
			if(i - l == 2) {
				rangeWithDots.push(l + 1)
			} else if(i - l != 1) {
				rangeWithDots.push('...')
			}
		}
		rangeWithDots.push(i)


		l = i;
	}

	return rangeWithDots;
}


String.prototype.replaceAll = function(search, replacement) {
	let target = this
	return target.split(search).join(replacement)
}

function uuidv4() {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
		let r = Math.random() * 16 | 0,
			v = c == 'x' ? r : (r & 0x3 | 0x8)
		return v.toString(16)
	})
}


function listObjectToObject(listObj) {
	if(typeof listObj != 'object' || listObj == null)
		return listObj
	let obj = {}

	function calistir(anaObj, keys, parentKey = '') {
		if(anaObj[keys[0]] == undefined) {
			anaObj[keys[0]] = {}
			if(keys.length > 1) {
				if(!isNaN(keys[1])) {
					anaObj[keys[0]] = []
				}
			}
		}
		if(keys.length == 1) {
			anaObj[keys[0]] = listObj[`${(parentKey?parentKey+'.':'')}${keys[0]}`]

		} else {
			let key = keys[0]
			parentKey += (parentKey ? '.' : '') + key
			keys.splice(0, 1)
			calistir(anaObj[key], keys, parentKey)
		}
	}

	Object.keys(listObj).forEach((mainKey) => {
		let a = calistir(obj, mainKey.split('.'))
		obj = Object.assign({}, obj, a)
	})

	return obj
}


function objectToListObject(objOrj, exceptArrays = false) {
	let listObj = {}
	if(objOrj == undefined || objOrj == null)
		return listObj

	function calistir(obj, parentKey) {
		if(Array.isArray(obj) && exceptArrays) {
			if(parentKey != '') {
				listObj[parentKey] = obj
			}
		} else if(typeof obj == 'object') {
			Object.keys(obj || {}).forEach((key) => {
				let key2 = (parentKey ? parentKey + '.' : '') + key
				calistir(obj[key], key2)
			})
		} else {
			if(parentKey != '') {
				listObj[parentKey] = obj
			}
		}
	}

	calistir(objOrj)

	return listObj
}


function objectArrayControl(obj) {
	if(obj) {
		if(obj == null)
			return []
		if(Array.isArray(obj))
			return obj

		if(typeof obj == 'object') {
			let bFound = false
			let dizi = []
			Object.keys(obj).forEach((key) => {
				if(isNaN(key)) {
					bFound = true
				} else {
					dizi.push(obj[key])
				}
			})
			if(bFound == false) {
				return dizi
			} else {
				return obj
			}
		}
	} else {
		return []
	}
}

function getDivData(divId, prefix = '', eskiBirIndex = true) {
	let obj = {}
	if(!document)
		return obj
	let elements = document.querySelector(`${divId}`).querySelectorAll(`input, select`)
	let index = 0
	while(index < elements.length) {
		if(elements[index].name != '' && (elements[index].name.indexOf('[-1]') < 0 || eskiBirIndex)) {
			let key = elements[index].name.replaceAll('[', '.').replaceAll(']', '')
			let value = elements[index].value
			if(elements[index].type == 'text' && elements[index].classList.contains('formatted-number')) {
				value = convertNumber(elements[index].value)
			}
			if(elements[index].type == 'checkbox') {
				value = elements[index].checked
			}

			if(prefix != '') {
				if(key.substr(0, prefix.length) == prefix) {
					key = key.substr(prefix.length)
					if(key.substr(0, 1) == '.') {
						key = key.substr(1)
					}
				}
			}

			obj[key] = value
		}

		index++
	}
	return listObjectToObject(obj)
}


String.prototype.padding = function(n, c) {
	let val = this.valueOf()
	if(Math.abs(n) <= val.length) {
		return val
	}
	let m = Math.max((Math.abs(n) - this.length) || 0, 0)
	let pad = Array(m + 1).join(String(c || ' ').charAt(0))
	return (n < 0) ? pad + val : val + pad
}


function calculate(formula, values) {
	if((formula || '') == '')
		return 0
	formula = formula.replaceAll('${', '{').replaceAll('{', '${')
	let code = `(function(){
	`
	Object.keys(values).forEach((key) => {
		code += `let ${key}=${JSON.stringify(values[key])}\n`
	})

	code += `return eval(\`${formula}\`)
	})()`

	return eval(code)
}

function htmlEval(html, values = {}) {
	try {
		html = html.replaceAll('${', '{').replaceAll('{', '${')
		let code = ''
		Object.keys(values).forEach((key) => {
			code += `let ${key}=${JSON.stringify(values[key])}\n`
		})
		code += `return \`${html}\``
		let f = new Function(code)
		return f()
	} catch {}
	return html
}

// function htmlEval(exp, values={}) {
// 	if((exp || '') == '')
// 		return ''
// 	exp=exp.replaceAll('${','{').replaceAll('{','${')
// 	let code=`(function(){
// 	`
// 	Object.keys(values).forEach((key)=>{
// 		code+=`let ${key}=${JSON.stringify(values[key])}\n`
// 	})

// 	code+=`return \`${exp}\`
// 	})()`

// 	return code
// }


function htmlEval11(html) {
	let s1 = html.indexOf('`', 0)
	let s2 = html.indexOf('`', s1 + 2)
	while(s1 > -1 && s2 > s1) {
		let kodParcasi = html.substr(s1, s2 - s1 + 1)
		try {
			let sbuf = eval(kodParcasi)
			html = html.replace(kodParcasi, sbuf)
		} catch {}

		s1 = html.indexOf('`', s2 + 1)
		s2 = html.indexOf('`', s1 + 2)
	}


	return html
}
},{}]},{},[1,7,6,5,2,3,4]);
