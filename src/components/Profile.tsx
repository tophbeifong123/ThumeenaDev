import { motion } from "framer-motion";

export default function Profile() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden"
      >
        <div className="h-32 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
        <div className="px-6 py-8 relative">
          <motion.img
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            src="https://ui-avatars.com/api/?name=Web+Developer&background=random&size=128"
            alt="Profile Picture"
            className="w-24 h-24 rounded-full border-4 border-white absolute -top-12 left-6 bg-white"
          />
          <div className="mt-12">
            <h1 className="text-2xl font-bold text-gray-800">Thumeena Dev</h1>
            <p className="text-gray-500 font-medium mt-1">Full-stack Developer</p>
            
            <p className="text-gray-600 mt-4 leading-relaxed">
              Passionate about building beautiful, responsive, and user-friendly web applications using the latest technologies.
            </p>

            <div className="mt-6 flex gap-3">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium shadow hover:bg-blue-700 transition-colors"
              >
                Contact Me
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors"
              >
                Portfolio
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
