import jwt from 'jsonwebtoken'

export const adminLogin = async (req, res) =>{
    try {
        const {email, password} = req.body
        if(email !== process.env.ADMIN_EMAIL || password !== process.env.ADMIN_PASSWORD){
            return res.status(401).json({
                success: false,
                message: "Invalid credentials"
            })
        }

        const token = jwt.sign({email},process.env.JWT_SECRET,{expiresIn: '7d'})

        return res.status(200).json({
            success: true,
            token,
        })

    } catch (error) {
        res.status(500).json({
            success:false,
            message: 'server error'
        })
    }
}