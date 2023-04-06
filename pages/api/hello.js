import db from '../../lib/db';
import modelo from '../../model/modelo';

export default async function server(req,res){
  await db()
    const {method} = req

    switch(method){
        case 'POST':
            try {
                const dato = new modelo(req.body)
                await dato.save()
                return res.status(200).json({mensaje:'dato guardado exitosamente'})
            } catch (error) {
                return res.status(400).json({error})
            }
            default:
            return res.status(500).json({mensaje:'falla en el servidor'})
    }
}


