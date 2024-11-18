export type Review = {
  "name": string,
  "stars": number,
  "date": string,
  "title": string,
  "review": string
}

export type Product = {
  "imageUrl": string[],
  "price": number,
  "productName": string,
  "productId": string,
  "productDescription": string,
  "productInfo": string,
  "reviews": Review[]
}


