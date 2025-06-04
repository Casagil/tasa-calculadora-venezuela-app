
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
    <div className="max-w-md mx-auto bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen p-4 space-y-6">
      {/* Panel de Configuración */}
      <Collapsible open={isConfigOpen} onOpenChange={setIsConfigOpen}>
        <CollapsibleTrigger asChild>
          <Button 
            variant="outline" 
            className="w-full justify-between bg-white/80 backdrop-blur-sm border-slate-200 hover:bg-white/90 shadow-sm transition-all duration-200"
          >
            <div className="flex items-center gap-2">
              <Settings className="h-4 w-4 text-slate-600" />
              <span className="font-medium text-slate-700">Configurar Tasas</span>
            </div>
            {isConfigOpen ? <ChevronUp className="h-4 w-4 text-slate-500" /> : <ChevronDown className="h-4 w-4 text-slate-500" />}
          </Button>
        </CollapsibleTrigger>
        
        <CollapsibleContent>
          <Card className="mt-3 p-5 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200 shadow-sm">
            <div className="space-y-5">
              <div>
                <Label htmlFor="tasaBCV" className="text-sm font-semibold text-slate-700 mb-2 block">
                  Tasa BCV (Oficial)
                </Label>
                <div className="flex items-center gap-2">
                  <Input
                    id="tasaBCV"
                    type="number"
                    value={tasaBCV}
                    onChange={(e) => setTasaBCV(parseFloat(e.target.value) || 0)}
                    className="bg-white border-blue-200 focus:border-blue-400 focus:ring-blue-300"
                    step="0.01"
                  />
                  <span className="text-sm font-medium text-slate-600 bg-white px-2 py-1 rounded border">Bs/$</span>
                </div>
              </div>

              <div>
                <Label htmlFor="tasaParalelo" className="text-sm font-semibold text-slate-700 mb-2 block">
                  Tasa Paralelo
                </Label>
                <div className="flex items-center gap-2">
                  <Input
                    id="tasaParalelo"
                    type="number"
                    value={tasaParalelo}
                    onChange={(e) => setTasaParalelo(parseFloat(e.target.value) || 0)}
                    className="bg-white border-blue-200 focus:border-blue-400 focus:ring-blue-300"
                    step="0.01"
                  />
                  <span className="text-sm font-medium text-slate-600 bg-white px-2 py-1 rounded border">Bs/$</span>
                </div>
              </div>

              <div className="bg-white/70 p-4 rounded-lg border border-blue-200">
                <p className="text-sm text-center font-medium text-slate-700">
                  <span className="text-blue-600">Diferencia:</span> {diferencia.toFixed(2)} Bs/$
                </p>
                <p className="text-xs text-center text-slate-600 mt-1">
                  ({porcentajeDiferencia}% sobre BCV)
                </p>
              </div>
            </div>
          </Card>
        </CollapsibleContent>
      </Collapsible>

      {/* Indicador BCV */}
      <div className="flex justify-center">
        <div className="bg-gradient-to-r from-yellow-400 to-amber-500 text-black px-6 py-3 rounded-xl font-bold text-lg shadow-lg">
          BCV: {tasaBCV.toFixed(2)}
        </div>
      </div>

      {/* Campo de Precio */}
      <Card className="p-5 bg-white/80 backdrop-blur-sm border-slate-200 shadow-sm">
        <Label htmlFor="precio" className="text-sm font-semibold text-slate-700 mb-3 block">
          Precio en USD
        </Label>
        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold text-green-600">$</span>
          <Input
            id="precio"
            type="number"
            value={precioUSD}
            onChange={(e) => setPrecioUSD(parseFloat(e.target.value) || 0)}
            className="text-xl font-semibold border-slate-300 focus:border-green-400 focus:ring-green-300"
            step="0.01"
          />
        </div>
      </Card>

      {/* Totales */}
      <div className="grid grid-cols-2 gap-4">
        {/* Total USD */}
        <Card className="p-5 bg-gradient-to-br from-blue-500 to-blue-600 text-white text-center shadow-lg hover:shadow-xl transition-shadow duration-200">
          <h3 className="text-sm font-semibold mb-2 opacity-90">Total $</h3>
          <p className="text-2xl font-bold">${totalUSD.toFixed(1)}</p>
        </Card>

        {/* Total Bolívares */}
        <Card className="p-5 bg-gradient-to-br from-emerald-500 to-green-600 text-white text-center shadow-lg hover:shadow-xl transition-shadow duration-200">
          <h3 className="text-sm font-semibold mb-2 opacity-90">Total Bolívares</h3>
          <p className="text-lg font-bold leading-tight">
            {totalBolivares.toLocaleString('es-VE', { 
              minimumFractionDigits: 0,
              maximumFractionDigits: 0 
            })}
          </p>
          <p className="text-xs opacity-90 mt-1">Bs</p>
        </Card>

        {/* Total RECA */}
        <Card className="p-5 bg-gradient-to-br from-orange-500 to-red-500 text-white text-center col-span-2 shadow-lg hover:shadow-xl transition-shadow duration-200">
          <h3 className="text-sm font-semibold mb-3 opacity-90">Total RECA</h3>
          <p className="text-3xl font-bold">${totalRECA.toFixed(1)}</p>
        </Card>
      </div>
    </div>
  );
};

export default TasaCalculator;
