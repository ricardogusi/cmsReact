import credentials from '../../credentials/CMS Jogos-466ae9b9c86c.json'
import {GoogleSpreadsheet} from 'google-spreadsheet'



export default async (req, res) => {

  const doc = new GoogleSpreadsheet('1-RsPqcuHG-zCrgg7pIDPUHM7s9wR5UPh_0Vkg7gDeZg');

  await doc.useServiceAccountAuth({
    client_email: credentials.client_email,
    private_key: credentials.private_key
  });

  await doc.loadInfo()

  const sheet = doc.sheetsByIndex[0];
  
  const rows = await sheet.getRows()

  const jogos = rows.map(({nome, imagem_capa}) =>{
    return {
      nome,
      imagem_capa
    }
  })

  res.send({
    title: doc.title,
    games: jogos,

    
  })
}
