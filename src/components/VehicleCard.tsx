import { Link } from "react-router-dom";
import { Vehicle } from "@/data/vehicles";

interface VehicleCardProps {
  vehicle: Vehicle;
}

export function VehicleCard({ vehicle }: VehicleCardProps) {
  return (
    <Link
      to={`/sales/${vehicle.id}`}
      className="group block border border-border rounded-lg overflow-hidden bg-card hover:border-primary/50 transition-colors"
    >
      <div className="flex flex-col sm:flex-row">
        {/* Image */}
        <div className="sm:w-64 md:w-72 lg:w-80 flex-shrink-0">
          <div className="aspect-[4/3] sm:aspect-auto sm:h-full">
            <img
              src={vehicle.images[0]}
              alt={vehicle.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-5 sm:p-6 flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-xl md:text-2xl mb-2 group-hover:text-primary transition-colors">
              {vehicle.name}
            </h3>
            <div className="flex items-center gap-6 text-muted-foreground text-sm md:text-base">
              <span>{vehicle.mileage}</span>
              <span>{vehicle.year}</span>
            </div>
          </div>

          <div className="mt-4 sm:mt-6">
            <span className="text-xl md:text-2xl font-bold">
              € {vehicle.price.toLocaleString("nl-BE")}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
