
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Settings } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

const TasaCalculator = () => {
  const [tasaBCV, setTasaBCV] = useState(97.31);
  const [tasaParalelo, setTasaParalelo] = useState(130);
  const [precioUSD, setPrecioUSD] = useState(100);
  const [isConfigOpen, setIsConfigOpen] = useState(false);

  const diferencia = tasaParalelo - tasaBCV;
  const porcentajeDiferencia = ((diferencia / tasaBCV) * 100).toFixed(1);
  
  const totalUSD = precioUSD;
  const totalBolivares = precioUSD * tasaParalelo;
  const totalRECA = totalBolivares / tasaBCV;

  return (
    <div className="max-w-md mx-auto bg-gray-50 min-h-screen p-4 space-y-4">
      {/* Panel de Configuración */}
      <Collapsible open={isConfigOpen} onOpenChange={setIsConfigOpen}>
        <CollapsibleTrigger asChild>
          <Button 
            variant="outline" 
            className="w-full justify-between bg-white border-gray-200"
          >
            <div className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Configurar Tasas
            </div>
            {isConfigOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </Button>
        </CollapsibleTrigger>
        
        <CollapsibleContent>
          <Card className="mt-2 p-4 bg-amber-50 border-amber-200">
            <div className="space-y-4">
              <div>
                <Label htmlFor="tasaBCV" className="text-sm font-medium">
                  Tasa BCV (Oficial)
                </Label>
                <div className="flex items-center gap-2 mt-1">
                  <Input
                    id="tasaBCV"
                    type="number"
                    value={tasaBCV}
                    onChange={(e) => setTasaBCV(parseFloat(e.target.value) || 0)}
                    className="bg-white"
                    step="0.01"
                  />
                  <span className="text-sm text-gray-600">Bs/$</span>
                </div>
              </div>

              <div>
                <Label htmlFor="tasaParalelo" className="text-sm font-medium">
                  Tasa Paralelo
                </Label>
                <div className="flex items-center gap-2 mt-1">
                  <Input
                    id="tasaParalelo"
                    type="number"
                    value={tasaParalelo}
                    onChange={(e) => setTasaParalelo(parseFloat(e.target.value) || 0)}
                    className="bg-white"
                    step="0.01"
                  />
                  <span className="text-sm text-gray-600">Bs/$</span>
                </div>
              </div>

              <div className="bg-white p-3 rounded-md border border-amber-200">
                <p className="text-sm text-center">
                  <span className="font-medium">Diferencia:</span> {diferencia.toFixed(2)} Bs/$
                </p>
                <p className="text-sm text-center text-gray-600">
                  ({porcentajeDiferencia}% sobre BCV)
                </p>
              </div>
            </div>
          </Card>
        </CollapsibleContent>
      </Collapsible>

      {/* Indicador BCV */}
      <div className="flex justify-center">
        <div className="bg-amber-400 text-black px-4 py-2 rounded-lg font-medium">
          BCV: {tasaBCV.toFixed(2)}
        </div>
      </div>

      {/* Campo de Precio */}
      <Card className="p-4 bg-white">
        <Label htmlFor="precio" className="text-sm font-medium">
          Precio en USD
        </Label>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-lg">$</span>
          <Input
            id="precio"
            type="number"
            value={precioUSD}
            onChange={(e) => setPrecioUSD(parseFloat(e.target.value) || 0)}
            className="text-lg"
            step="0.01"
          />
        </div>
      </Card>

      {/* Totales */}
      <div className="grid grid-cols-2 gap-3">
        {/* Total USD */}
        <Card className="p-4 bg-blue-500 text-white text-center">
          <h3 className="text-sm font-medium mb-2">Total $</h3>
          <p className="text-2xl font-bold">${totalUSD.toFixed(1)}</p>
        </Card>

        {/* Total Bolívares */}
        <Card className="p-4 bg-green-500 text-white text-center">
          <h3 className="text-sm font-medium mb-2">Total Bolívares</h3>
          <p className="text-xl font-bold">
            {totalBolivares.toLocaleString('es-VE', { 
              minimumFractionDigits: 0,
              maximumFractionDigits: 0 
            })}
          </p>
          <p className="text-xs">Bs</p>
        </Card>

        {/* Total RECA */}
        <Card className="p-4 bg-orange-500 text-white text-center col-span-2">
          <h3 className="text-sm font-medium mb-2">Total RECA</h3>
          <p className="text-3xl font-bold">${totalRECA.toFixed(1)}</p>
        </Card>
      </div>
    </div>
  );
};

export default TasaCalculator;
