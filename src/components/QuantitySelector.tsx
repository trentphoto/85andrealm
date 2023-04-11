export default function QuantitySelector({ quantity, updateQuantity, stock }: { quantity: number, updateQuantity: Function, stock: number }) {
    
    const handleQuantityIncrease = () => {
        if (quantity < stock) {
            updateQuantity(quantity + 1);
        }
    }
    
    const handleQuantityDecrease = () => {
        if (quantity > 1) {
            updateQuantity(quantity - 1);
        }
    }

  return (
    <div className="border border-gray-400 py-4 flex items-center bg-white">
        
        {/* decrease button */}
        <button className="text-2xl font-bold text-gray-700 px-8" onClick={() => handleQuantityDecrease()}>-</button>
        
        {/* divider */}
        <div className="block h-full w-px bg-gray-400" />
        
        {/* quantity label */}
        <span className="text-lg font-bold text-gray-700 px-8 py-2">{quantity}</span>
        
        {/* divider */}
        <div className="block h-full w-px bg-gray-400" />
        
        {/* increase button */}
        <button className="text-2xl font-bold text-gray-700 px-8" onClick={() => handleQuantityIncrease()}>+</button>
    </div>
  )
}
